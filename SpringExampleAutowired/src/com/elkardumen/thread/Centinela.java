package com.elkardumen.thread;

import java.io.IOException;

public class Centinela implements Runnable {

	private static boolean active = true;
	private SocketReader reader;
	
	public Centinela (SocketReader reader) {
		this.reader = reader;
	}
	
	@Override
	public void run() {
		while (active  && SocketReader.isActive()) {
			try {
				Thread.sleep(30000);
				//System.out.println("Verificando estado de SocketReader.");
				if (reader.getScanner() != null) {
					//checkSocket(reader.getScanner().ioException());
					//t= cuando esta desconectado, f=Conectado
					String scan=reader.getScanner().toString().substring(reader.getScanner().toString().indexOf("source")+14,reader.getScanner().toString().indexOf("source")+15);
					checkSocket(scan);
					
				}
			} catch (IOException e) {
				System.out.println("Error al reconectarse a socket.");
				e.printStackTrace();
			} catch (InterruptedException e) {
				System.out.println("Error al esperar para verificar estado de SocketReader.");
				e.printStackTrace();
			}
		}
		System.out.println("Hilo Centinela terminado.");
	}
	private void checkSocket(String ioException) throws IOException {
		if (ioException.equals("t")) {
			System.out.println("ioException: " + ioException);
			reader.disconnect();
			reader.connect();
		}
	}
	public static boolean isActive() {
		return active;
	}

	public static void setActive(boolean active) {
		Centinela.active = active;
	}
}
