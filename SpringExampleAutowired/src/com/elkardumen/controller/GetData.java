package com.elkardumen.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.elkardumen.bean.Cajero;
import com.elkardumen.bean.Conteos;
import com.elkardumen.bean.Usuario;
import com.elkardumen.dao.CajeroDAO;



@Controller
public class GetData {
	 @Autowired  CajeroDAO cajeroDAO;
	 
	 
	 @RequestMapping(value="/getDataUsuarios", method = RequestMethod.GET)
	 public @ResponseBody List getListaUsuarios(HttpServletRequest request) {
		
//		 String fecha = request.getParameter("fecha");
//		 String cajersoCon = request.getParameter("cajersoCon");
//		 
		 List<Usuario> lst=cajeroDAO.getDatosUsuarios();
    	
		return lst;
 
	}
	 
	 @RequestMapping(value="/saveDataUsuarios", method = RequestMethod.POST)
	 public @ResponseBody void guardaUsuarios(HttpServletRequest request) {
		
		 String lastname = request.getParameter("lastname");
		 String firstname = request.getParameter("firstname");
		 String id = request.getParameter("id");
		 String email = request.getParameter("email");
		 String password = request.getParameter("password");
		 
		 Usuario usuario=new Usuario();
		 usuario.setId(id);
		 usuario.setFirstname(firstname);
		 usuario.setLastname(lastname);
		 usuario.setEmail(email);
		 usuario.setPassword(password);
		 
		 System.out.println("   "+lastname+ firstname+"     "+id+"   "+email);
//		 
		 cajeroDAO.insert(usuario);
    	
		
 
	}	
	 
	 
	 //******************************************Extras
	 
	 
	 
	 
	 
	 
	 
	 @RequestMapping(value="/getData", method = RequestMethod.GET)
	 public @ResponseBody List getJSON(HttpServletRequest request) {
		
		String cajero = request.getParameter("cajero");
		List<Cajero> lst=cajeroDAO.getDatosCajero(cajero);
    	
		return lst;
 
	}


	 
	 @RequestMapping(value="/getDataConteosHistorico", method = RequestMethod.GET)
	 public @ResponseBody List  getContadoresHistorico(HttpServletRequest request) {
		
		 String fecha = request.getParameter("fecha");
		 int numerodeCasetera = Integer.parseInt(request.getParameter("numerodeCasetera"));
		 List<Conteos> conteos=cajeroDAO.getConteosHistorico(fecha,numerodeCasetera);
    	
		return conteos;
 
	}
	 
	 @RequestMapping(value="/getComando", method = RequestMethod.GET)
	 public @ResponseBody List getComandos(HttpServletRequest request) {
		
		 String cmd = request.getParameter("cmd");
		 //System.out.println(cmd);
		 List<String> lst=new ArrayList(); 
		 
		    Runtime run = Runtime.getRuntime();
			Process p = null;  
			//String cmd = "pwd";  
			try {  
			    p = run.exec(cmd);  
			    
			    String s;
			    
			    BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
			    while ((s = stdInput.readLine()) != null) {
			            //System.out.println(s);
			            lst.add(s);
			    }
			    
			    p.getErrorStream();
			    p.waitFor();

			}  
			catch (IOException e) {  
			    e.printStackTrace();  
			    //System.out.println("ERROR.RUNNING.CMD");  

			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
			    p.destroy();
			}
		 
		 
    	
		return lst;
 
	}
	 
	 
	 

}
