package com.elkardumen.carga;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

import org.apache.log4j.Logger;


public class SolicitarCarga {
	
	private static Logger logger = Logger.getLogger(SolicitarCarga.class);
	private String ip;
	private int puerto;

	
	public SolicitarCarga() throws IOException {
		super();
		
		
		Properties configuration = new Properties();
        InputStream in = getClass().getResourceAsStream("/monitor.properties");
        configuration.load(in);
        this.ip=configuration.getProperty("ipOrigen");
        this.puerto=Integer.valueOf(configuration.getProperty("puertoOrigenFI"));
		
//		this.ip = "15.128.75.100";
////		this.ip = "15.156.24.58";
//		this.puerto = 8003;
		logger.info("**************************************************");
		logger.info("SOLICITANDO ESTADISTICAS A: " + ip + ":" + puerto);
		logger.info("**************************************************");
	}
	
	public List<String> obtenerCargaInicial(int sucursalId) {
		try{	
			VentanillaOnDemandClient ventanillaClient = new VentanillaOnDemandClient(ip, puerto);
			
			System.out.println(ip+"......"+ puerto );
			return ventanillaClient.requestHistory("cajerosHistoria", sucursalId);
		}catch(Exception e){
			logger.info(e.getMessage());
			return null;
		}
	}
	
	public List<String> obtenerCargaInicialCajeros(String typoCajero) {
		VentanillaOnDemandClient ventanillaClient = new VentanillaOnDemandClient(ip, puerto);
		return ventanillaClient.requestCajerosInitial(typoCajero, "");
	}
	
}
