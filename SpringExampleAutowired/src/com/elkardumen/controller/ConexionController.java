package com.elkardumen.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.elkardumen.thread.SocketReader;

@Controller
public class ConexionController {
    @RequestMapping("/pageInit.html")
    public String logTasPage() {
		SocketReader.arranca();
    	return "paginaInicial";
    }
  
    
    
    @RequestMapping("/prueba.html")
    public String loadIndex() {
		SocketReader.arranca();
        return "index";
    }
   
 
    

}