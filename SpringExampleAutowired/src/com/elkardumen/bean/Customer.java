package com.elkardumen.bean;

import java.io.Serializable;

public class Customer implements Serializable
{
	
	public Customer(){
		
	}
	
	long usr_id	;
	String usr_nombre;
	String usr_password;
	String usr_nombrecompleto;
	String usr_nivel;
	int edad;
	
	
	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public long getUsr_id() {
		return usr_id;
	}

	public void setUsr_id(long usr_id) {
		this.usr_id = usr_id;
	}

	public String getUsr_nombre() {
		return usr_nombre;
	}

	public void setUsr_nombre(String usr_nombre) {
		this.usr_nombre = usr_nombre;
	}

	public String getUsr_password() {
		return usr_password;
	}

	public void setUsr_password(String usr_password) {
		this.usr_password = usr_password;
	}

	public String getUsr_nombrecompleto() {
		return usr_nombrecompleto;
	}


	public void setUsr_nombrecompleto(String usr_nombrecompleto) {
		this.usr_nombrecompleto = usr_nombrecompleto;
	}

	public String getUsr_nivel() {
		return usr_nivel;
	}

	public void setUsr_nivel(String usr_nivel) {
		this.usr_nivel = usr_nivel;
	}



	
	
	
	
	public Customer(long usr_id,String usr_nombre,String usr_password,String usr_nombrecompleto,String usr_nivel) {
		this.usr_id = usr_id;
		this.usr_nombre = usr_nombre;
		this.usr_password = usr_password;
		this.usr_nombrecompleto = usr_nombrecompleto;
		this.usr_nivel = usr_nivel;
	}
	
	

	@Override
	public String toString() {
		return "Customer [usr_id=" + usr_id + ", usr_nombre=" + usr_nombre + ", usr_password=" + usr_password
				+ "]";
	}
	
	
}
