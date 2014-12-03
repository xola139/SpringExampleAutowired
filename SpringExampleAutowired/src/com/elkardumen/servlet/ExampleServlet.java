package com.elkardumen.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

/**
 * Servlet implementation class ExampleServlet
 */
//@WebServlet(description = "Servlet de ejemplo para integracion con spring", urlPatterns = { "/ExampleServlet" })
public class ExampleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ExampleServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("En doGet");
		ejecuta();
		// TODO Auto-generated method stub
	}

	private void ejecuta() {
		// TODO Auto-generated method stub
		System.out.println("En ejecuta");
		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
		System.out.println(ctx.getBean("stringObject"));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("En doPost");
		ejecuta();
		// TODO Auto-generated method stub
	}

}
