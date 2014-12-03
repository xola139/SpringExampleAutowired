package com.elkardumen.carga;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.google.gson.Gson;

public class VentanillaOnDemandClient {
	private static Logger logger = Logger.getLogger(VentanillaOnDemandClient.class);
	private String ip;
	private int port;
	
	public VentanillaOnDemandClient(String ip, int port) {
		this.ip = ip;
		this.port = port;
	}

	public List<String> requestHistory(String type, int sucursalId) {
		List<String> returnValue = new ArrayList<String>();
		VentanillaOnDemandSocket clientSocket = null; 
		try {
			clientSocket = new VentanillaOnDemandSocket(ip, port);
			
			String json = obtenerJson(type, sucursalId);

			logger.info("Solicitando a ventanillasEsper: " + json);
			clientSocket.sendLine(json);
	        
	        String response = null;
            while ((response = clientSocket.readLine()) != null) {
            	logger.info("Mensaje de ventanillasEsper: " + response);
                if (!response.equals("EOF")) {
                	returnValue.add(response);
                } else {
                	break;
                }
            }
            logger.info("Finaliza conexion con ventanillasEsper.");
		} catch (IOException e) {
			logger.info("Error en la comunicacion con ventanillasEsper." + e.getMessage());
		} finally {
			if (clientSocket != null) {
				clientSocket.close();
			}
		}
		
		
		
		return returnValue;
	}


	
	
	public List<String> requestCajerosInitial(String type, String sucursalId) {
		List<String> returnValue = new ArrayList<String>();
		VentanillaOnDemandSocket clientSocket = null; 
		try {
			clientSocket = new VentanillaOnDemandSocket(ip, port);
			
			String json = obtenerJson(type, 0);

			logger.info("Solicitando a ventanillasEsper: " + json);
			clientSocket.sendLine(json);
	        
	        String response = null;
            while ((response = clientSocket.readLine()) != null) {
            	logger.info("Mensaje de ventanillasEsper: " + response);
                if (!response.equals("EOF")) {
                	returnValue.add(response);
                } else {
                	break;
                }
            }
            logger.info("Finaliza conexion con ventanillasEsper.");
		} catch (IOException e) {
			logger.info("Error en la comunicacion con ventanillasEsper." + e.getMessage());
		} finally {
			if (clientSocket != null) {
				clientSocket.close();
			}
		}
//		System.out.println(returnValue);
		
		return returnValue;
	}
	
	
	private String obtenerJson(String type, int sucursalId) {
		Gson gson = new Gson();
		VentanillaOnDemandJsonRequest json = new VentanillaOnDemandJsonRequest();

		json.setType(type);
		json.setSucursalId(sucursalId);

		return gson.toJson(json);
	}
}
