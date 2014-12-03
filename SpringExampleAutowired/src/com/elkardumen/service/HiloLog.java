package com.elkardumen.service;


import org.directwebremoting.Browser;
import org.directwebremoting.ScriptSessions;

import com.elkardumen.thread.SocketReader;

public class HiloLog implements Runnable {
	private static boolean active = true;

	public HiloLog() {
		new Thread(this).start();
	}
	
	public synchronized void arranca() {
	}

	@Override
	public void run() {
		while (active) {
			try {
				final String message = SocketReader.getMessagesFromSocket().take();
//				if (message.getFlujo().equals(SocketReader.FIN_TRANSMISION)) {
//					active = false;
//					break;
//				}
				Browser.withPage("/ClienteWebMonitorCajeros/cajeros.html",
					new Runnable() {
						public void run() {
							if(message!=null)
								ScriptSessions.addFunctionCall("evento", message);
						}
					}
				);
				
			} catch (InterruptedException e1) {
				System.out.println("Excepcion al enviar a pintar row o punto. " + e1.getMessage());
			}
		}
		System.out.println("Hilo consumidor terminado");
	}
	public static boolean isActive() {
		return active;
	}

	public static void setActive(boolean active) {
		HiloLog.active = active;
	}

}
