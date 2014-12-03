package com.elkardumen.dao;

import java.util.List;

import com.elkardumen.bean.Cajero;
import com.elkardumen.bean.Conteos;
import com.elkardumen.bean.Usuario;





public interface CajeroDAO 
{

	public   List<Cajero> getDatosCajero(String elCajero);
//	public   List<Cajero> getDatosCajeroHistorico(String elCajero,String cajersoCon);
	public   List<Usuario> getDatosUsuarios();
	public void insert(Usuario user);
	public   List <Conteos> getConteosHistorico(String fecha,int elCajeroTiene);

	
	
}




