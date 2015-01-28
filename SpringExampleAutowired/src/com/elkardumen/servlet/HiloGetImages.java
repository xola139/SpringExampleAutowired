package com.elkardumen.servlet;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.elkardumen.bean.Imagen;
import com.elkardumen.dao.ImagenesDAO;

public class HiloGetImages  extends Thread{
	
	private int ciclos=0;
	private static Map<String,Imagen> m = new HashMap<String,Imagen>();
	private static List<Imagen> lstImagen=new ArrayList<Imagen>();

	private static StringBuffer retorno;

	
	public static boolean seguirCiclo=true;
	private ImagenesDAO imagenDAO;
	

	public HiloGetImages(ImagenesDAO imagenDAO){
		
		this.imagenDAO=imagenDAO;
	}
	
	public void run() {
		
		Document doc;
		
		
		//imagenDAO.findAll();
		
		
//		System.getProperties().put( "proxySet", "true" );
//		System.getProperties().put( "socksProxyHost", "127.0.0.1" );
//		System.getProperties().put( "socksProxyPort", "9150" );
//		
		
		while(seguirCiclo){
			ciclos++;
			System.out.println("Ciclos # "+ ciclos);
			Imagen img;
			Elements ele;
		try {
			
			
			
			doc = Jsoup.connect("http://asipasa.com").get();
			Element ultimoItem=doc.select("div.box_content").select("a").first();
			
			
			int ultimo=Integer.valueOf(ultimoItem.select("a").attr("href"));
			for(int i=0;i<=10;i++){
				doc = Jsoup.connect("http://asipasa.com/"+ultimo).get();
				ele=doc.select("div[id=main_image]").select("img");
				
				for (Element table : ele) {
					img=new Imagen();
					img.setImg("http://asipasa.com/"+table.attr("src"));
					img.setTitle(table.attr("title"));
					img.setFecha(System.currentTimeMillis());
					
					if(!m.containsKey(img.getImg())){
						m.put(img.getImg(), img);
						lstImagen.add(img);
						
						//System.out.println("_________<"+imagenDAO.getMax());
						//imagenDAO.insert(img);
					}
						
				}
				ultimo=ultimo-1;
			}
			
			System.getProperties().put( "proxySet", "true" );
			
			doc = Jsoup.connect("http://quejalada.com/").get();
			
			ele=doc.select("div[id*=post]");
			for (Element table : ele) {
				img=new Imagen();
				img.setImg(table.select("div.entry-content").select("p").select("a").attr("href"));
				img.setTitle(table.select("h1.entry-title").select("a").text());
				img.setFecha(System.currentTimeMillis());
				//lstImg.add(img);
				//m.put(img.getImg(), img);
				if(!m.containsKey(img.getImg())){
					m.put(img.getImg(), img);
					lstImagen.add(img);
					//System.out.println("_________<"+imagenDAO.getMax());
					//imagenDAO.insert(img);
				}
				
			}
			
			doc = Jsoup.connect("http://www.esgag.com").get();
			ele=doc.select("article[id*=jsid-entry-entity]");
			String esgagURL="";
			for (Element table : ele) {
				esgagURL=table.select("div[class*=badge-post-container]").select("div").select("a").select("img").attr("src");
				if(!esgagURL.contains(".gif.jpg")){
					img=new Imagen();
					img.setImg(esgagURL);
					img.setTitle(table.select("header").select("h2").select("a").text());
					img.setFecha(System.currentTimeMillis());
					//lstImg.add(img);
					//m.put(img.getImg(), img);
					if(!m.containsKey(img.getImg())){
						m.put(img.getImg(), img);
						lstImagen.add(img);
						//System.out.println("_________<"+imagenDAO.getMax());
						//imagenDAO.insert(img);
					}
				}
				
				
			}

			

			Thread.sleep(60000L);
		} catch (Exception e) {
	
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				Thread.sleep(6000L);
			} catch (InterruptedException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
	
		
		
		
	}
		System.out.println("*****************************************");
		System.out.println("**Fin del ciclo en HiloGetImages ********");
		System.out.println("*****************************************");


	}

	
	
	public static Map<String, Imagen> getM() {
		return m;
	}



	public static void setM(Map<String, Imagen> m) {
		HiloGetImages.m = m;
	}

	
	
	public static List<Imagen> getLstImagen() {
		return lstImagen;
	}

	public static void setLstImagen(List<Imagen> lstImagen) {
		HiloGetImages.lstImagen = lstImagen;
	}

	public static  String primerasImagenes(){
		retorno=new StringBuffer();
		int count=0;
		for(int i=lstImagen.size()-1;i>0;i--){
			retorno.append("<div class=\"row\">");
			retorno.append("	<div class=\"portfolio-item\">");
			retorno.append("		<div><h3>"+lstImagen.get(i).getTitle()+"</h3></div>");
			retorno.append("		<img class=\"img-responsive img-thumbnail\" style=\"width:auto; height:auto;\" src=\""+lstImagen.get(i).getImg()+"\" />");
			retorno.append("	</div>");
			retorno.append("	<div style=\"text-align: center;\">");
			retorno.append("		<div class=\"fb-like\" data-href=\"http://xdiversion.com/laImagen?laURL="+lstImagen.get(i).getImg()+"\" data-layout=\"box_count\" data-action=\"like\" data-show-faces=\"true\" data-share=\"true\"></div>");
			retorno.append("	</div>");
			retorno.append("</div>");
			count++;
			
			if(count==6){
				retorno.append("<input type=\"hidden\" value=\"6\" id=\"nElementosMostrados\">");
				retorno.append("<input type=\"hidden\" value=\""+lstImagen.size()+"\" id=\"totalElemtos\">");
				return retorno.toString();
			}
			
		}
		
		return "";
	}
	
	
	public static List<Imagen> getNextImages(int contador){
		List<Imagen> nextImagen=new ArrayList<Imagen>();
		int count=0;
		
		for(int i=lstImagen.size()-contador;i>0;i--){
			nextImagen.add(lstImagen.get(i));
			
			count++;
			if(count==6){
				System.out.println(nextImagen.size()+"<-----------");
				return nextImagen;
			}
		}
		
		
	
		return null;
	}
	
	public static String getRetorno() {
		return primerasImagenes();
	}

	public static void setRetorno(StringBuffer retorno) {
		HiloGetImages.retorno = retorno;
	}

	
}
