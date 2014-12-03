package com.elkardumen.thread;

	
import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;
import java.util.Properties;
import java.util.Scanner;
import java.util.concurrent.LinkedBlockingQueue;

public class SocketReader implements Runnable {

	private static LinkedBlockingQueue<String> messagesFromSocket = new LinkedBlockingQueue<String>();
	public static final String FIN_TRANSMISION = "<END OF TRANSMISSION>"; 
	private static Thread hilo;
	private static boolean active = true;
	private Socket client;
	private Scanner scanner;
	
	private SocketReader() {
	}
	
	public void connect() {
		boolean conectado = false;
		System.out.println("************* CONEXION A SOCKET ******************");

		while (!conectado) {
			try {
	
				Properties configuration = new Properties();
                InputStream in = getClass().getResourceAsStream("/monitor.properties");
                configuration.load(in);
                String server=configuration.getProperty("ipOrigen");
                int port=Integer.valueOf(configuration.getProperty("puertoOrigen"));
				
				client = new Socket(server, port);
				
				scanner = new Scanner(client.getInputStream());
				conectado = true;
				//
	
			} catch (IOException e) {
				//System.out.println("Fallo intento de conexion con socket. Se reintentara en 1 segundos.");
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e1) {
					//System.out.println("Error en el sleep al esperar intento de reconexion.");
				}
			}
		}

		System.out.println("************* CONEXION EXITOSA ******************");
	}
	
	public void disconnect() throws IOException {
		System.out.println("************* DESCONEXION ******************");

		System.out.println("Cerrando socket.");
		client.close();
		System.out.println("Cerrando scanner.");
		scanner.close();

		System.out.println("************* DESCONEXION EXITOSA ******************");
	}
	
	public synchronized static void arranca() {
		if (hilo == null) {
			hilo = new Thread(new SocketReader());
			hilo.start();
		}
	}
	
	@Override
	public void run() {
		int intentos = 0;

	
		connect();
		new Thread(new Centinela(this)).start();

		while (active) {
		
			try {
				if (scanner.hasNextLine()) {
					String mensaje = scanner.nextLine();
					
					//System.out.println(">>>//////"+mensaje);
					if (mensaje != null) {
						try {
							messagesFromSocket.put(mensaje);
						} catch (InterruptedException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}

					intentos = 0;
				}
			} catch (IllegalStateException e) {
				//System.out.println("Error: reconexion en proceso.");
				intentos++;
				try {
					if (intentos == 3) {
						Thread.sleep(500);
						intentos = 0;
					}
				} catch (InterruptedException e1) {
					//System.out.println("Error en el sleep al esperar por reconexion.");
				}
			}
//			catch (InterruptedException e) {
//				System.out.println("Error al colocar mensaje en LinkedBlockingQueue.");
//				e.printStackTrace();
//			}
			catch (NullPointerException e) {
				System.out.println("Error al colocar mensaje en LinkedBlockingQueue.");
				e.printStackTrace();
			}
		}
		
		try {
			disconnect();
			
			messagesFromSocket.put("FIN_TRANSMISION");
		} catch (IOException e) {
			System.out.println("Error al desconectarse a socket.");
		} catch (InterruptedException e) {
			System.out.println("Error al colocar mensaje de fin en LinkedBlockingQueue.");
		}
		System.out.println("Hilo productor terminado.");
	


}

	
	public static LinkedBlockingQueue<String> getMessagesFromSocket() {
		return messagesFromSocket;
	}

	public static boolean isActive() {
		return active;
	}

	public static void setActive(boolean active) {
		SocketReader.active = active;
	}

	public Socket getClient() {
		return client;
	}

	public Scanner getScanner() {
		return scanner;
	}
 
}
