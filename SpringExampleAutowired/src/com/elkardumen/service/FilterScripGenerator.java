package com.elkardumen.service;

public class FilterScripGenerator {
	public FilterScripGenerator() { }
	
	public String getMensaje(String idTabla, String[] campos) throws Exception {
	    StringBuilder declaraCondiciones = new StringBuilder();
	    StringBuilder colocaCondiciones = new StringBuilder();
		for (String v : campos) {
			String identificador = idTabla + v;
		    declaraCondiciones.append("var condicion" + identificador + "= $(\\\"#idforcheck" + identificador + "\\\").attr('aria-pressed')=='true' ? " +
					"\\\"String(obj." + v.replace('_', '.') + ").toLowerCase().indexOf(String($(\\\\\\\"#gs_" + identificador + "\\\\\\\").val()).toLowerCase())!=0\\\":" +
					"\\\"String(obj." + v.replace('_', '.') + ").toLowerCase().indexOf(String($(\\\\\\\"#gs_" + identificador + "\\\\\\\").val()).toLowerCase())==0\\\";");
		    colocaCondiciones.append(" eval(condicion" + identificador + ") &&");
		}
		colocaCondiciones.delete(colocaCondiciones.length()-2, colocaCondiciones.length());
		
		return "{\"idTabla\":\"" + idTabla + "\",\"declaraCondiciones\":\""+declaraCondiciones+"\",\"colocaCondiciones\":\""+colocaCondiciones+"\"}";

	}
}
