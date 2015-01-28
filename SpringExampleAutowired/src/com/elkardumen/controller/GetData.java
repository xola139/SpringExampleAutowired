package com.elkardumen.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.elkardumen.bean.Imagen;
import com.elkardumen.dao.ImagenesDAO;
import com.elkardumen.servlet.HiloGetImages;



@Controller
public class GetData {
	 @Autowired  ImagenesDAO imagenDAO;
	 
	 private static Thread hiloImagenes;
	 
		
	 @RequestMapping(value = "/index", method = RequestMethod.GET)
	    public String logTasPage( ModelMap model) {
	 

		 if(hiloImagenes==null){
				hiloImagenes=new Thread(new HiloGetImages(imagenDAO));
				hiloImagenes.start();
				try {
					Thread.sleep(10000L);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		 
		 
		//return lst;
		 model.addAttribute("mapImagenes", HiloGetImages.getRetorno());
		
		 
		 
		 return "lavista";
 
	}
	 
	 @RequestMapping(value="/getData", method = RequestMethod.GET)
	 public @ResponseBody List getJSON(HttpServletRequest request) {
		
		 System.out.println("------------>ntrando");
		int siguientes = Integer.valueOf(request.getParameter("siguientes"));
		//List<Imagen> lst=cajeroDAO.getDatosCajero(cajero);
    	
		 List<Imagen> lst=new ArrayList<Imagen>();
		 lst=HiloGetImages.getNextImages(siguientes);
		 
		return lst;
 
	}
	 
	 
//	 
//	 @RequestMapping(value="/saveDataUsuarios", method = RequestMethod.POST)
//	 public @ResponseBody void guardaUsuarios(HttpServletRequest request) {
//		
//		 String lastname = request.getParameter("lastname");
//		 String firstname = request.getParameter("firstname");
//		 String id = request.getParameter("id");
//		 String email = request.getParameter("email");
//		 String password = request.getParameter("password");
//		 
//		 Usuario usuario=new Usuario();
//		 usuario.setId(id);
//		 usuario.setFirstname(firstname);
//		 usuario.setLastname(lastname);
//		 usuario.setEmail(email);
//		 usuario.setPassword(password);
//		 
//		 System.out.println("   "+lastname+ firstname+"     "+id+"   "+email);
////		 
//		 cajeroDAO.insert(usuario);
//    	
//		
// 
//	}	
//	 
//	 
//	 //******************************************Extras
//	 
//	 
//	 
//	 
//	 
//	 
//	 
//	 @RequestMapping(value="/getData", method = RequestMethod.GET)
//	 public @ResponseBody List getJSON(HttpServletRequest request) {
//		
//		String cajero = request.getParameter("cajero");
//		List<Cajero> lst=cajeroDAO.getDatosCajero(cajero);
//    	
//		return lst;
// 
//	}
//
//
//	 
//	 @RequestMapping(value="/getDataConteosHistorico", method = RequestMethod.GET)
//	 public @ResponseBody List  getContadoresHistorico(HttpServletRequest request) {
//		
//		 String fecha = request.getParameter("fecha");
//		 int numerodeCasetera = Integer.parseInt(request.getParameter("numerodeCasetera"));
//		 List<Conteos> conteos=cajeroDAO.getConteosHistorico(fecha,numerodeCasetera);
//    	
//		return conteos;
// 
//	}
//	 
//	 @RequestMapping(value="/getComando", method = RequestMethod.GET)
//	 public @ResponseBody List getComandos(HttpServletRequest request) {
//		
//		 String cmd = request.getParameter("cmd");
//		 //System.out.println(cmd);
//		 List<String> lst=new ArrayList(); 
//		 
//		    Runtime run = Runtime.getRuntime();
//			Process p = null;  
//			//String cmd = "pwd";  
//			try {  
//			    p = run.exec(cmd);  
//			    
//			    String s;
//			    
//			    BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
//			    while ((s = stdInput.readLine()) != null) {
//			            //System.out.println(s);
//			            lst.add(s);
//			    }
//			    
//			    p.getErrorStream();
//			    p.waitFor();
//
//			}  
//			catch (IOException e) {  
//			    e.printStackTrace();  
//			    //System.out.println("ERROR.RUNNING.CMD");  
//
//			} catch (InterruptedException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}finally{
//			    p.destroy();
//			}
//		 
//		 
//    	
//		return lst;
// 
//	}
	 
	 
	 

}
