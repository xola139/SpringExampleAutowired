package com.elkardumen.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.elkardumen.bean.Cajero;
import com.elkardumen.bean.Conteos;
import com.elkardumen.bean.Usuario;
import com.elkardumen.dao.CajeroDAO;

public class JdbcCajeroDAO extends JdbcDaoSupport implements CajeroDAO
{
	
	
	
public List<Usuario> getDatosUsuarios(){
		
		String sql = "select id,firstname,lastname,email,password from usuario";
		List<Usuario> usuarios = getJdbcTemplate().query(sql,new BeanPropertyRowMapper(Usuario.class));
		return usuarios;
	
	}
	
public void insert(Usuario user){
	 
	String sql = "update usuario " +
		" set firstname=?,lastname=?,email=?,password=? where id=?";
	getJdbcTemplate().update(sql, new Object[] { user.getFirstname(),user.getLastname(),user.getEmail(),user.getPassword(),user.getId()});

}
	
	
	/********************EXtras*/

	
	//query mutiple rows with BeanPropertyRowMapper (Customer.class)
	public List<Cajero> getDatosCajero(String elCajero){
		
		String sql = "select cajero, "+
       " e1.descripcion as estatus_casetera_uno, "+
				" bes.fecha_uno fecha_casetera_uno, "+
				" e2.descripcion as estatus_casetera_dos, "+
				" bes.fecha_dos fecha_casetera_dos, "+
				" e3.descripcion as estatus_casetera_tres, "+
				" bes.fecha_tres fecha_casetera_tres, "+
				" e4.descripcion as estatus_casetera_cuatro, "+
				" bes.fecha_cuatro fecha_casetera_cuatro, "+
				" ef.descripcion as estatus_final, "+
				" bes.fecha_final fecha_final, "+
				" bes.transacciones, "+
				" bes.monto_trx, "+
				" bes.reversos, "+
				" bes.monto_rev "+
				" from bajo_efectivo_historico bes, "+
				" bajo_efectivo_estatus e1, "+
				" bajo_efectivo_estatus e2, "+
				" bajo_efectivo_estatus e3, "+
				" bajo_efectivo_estatus e4, "+
				" bajo_efectivo_estatus ef "+
				" where e1.estatus(+) = bes.estatus_casetera_uno "+
				" and e2.estatus(+) = bes.estatus_casetera_dos "+
				" and e3.estatus(+) = bes.estatus_casetera_tres "+
				" and e4.estatus(+) = bes.estatus_casetera_cuatro "+
				" and ef.estatus(+) = bes.estatus_final "+
				" and cajero='"+elCajero+"' ";
                   
//		System.out.println(sql);
		
		
		List<Cajero> cajero = getJdbcTemplate().query(sql,new BeanPropertyRowMapper(Cajero.class));
		return cajero;
	}
	
	
	
	

	
	
	
	
	
	public List<Conteos> getConteosHistorico(String fecha,int elCajeroTiene){
		//tabl bajo_efectivo_estatus
//		 1	CaseteraBajoEfectivo
//		 2	CaseteraSinEfectivo
//		 3	CajeroSinEfectivo
//		 4	Dotacion
//		 5	CaseteraRechazoLlena
//		 6	ErrorEnCasetera
//		 7	CierreCaseteraSinEfectivo
//		 8	CierreErrorEnCasetera
		
		List<Conteos> lstConteos=new ArrayList();
		
		
		//Dia anterior
		String  sql = "SELECT estatus_final, COUNT(*) contador,'Dia Anterior' dia FROM bajo_efectivo_historico "
					+ "where trunc(fecha_final)=trunc(to_date('"+fecha+"', 'dd/mm/yyyy')-1) and numcasets="+elCajeroTiene+ " and "
					+ "( estatus_final=8 or   estatus_final=9 or   estatus_final=10 or   estatus_final=11 )"
					+ "GROUP BY estatus_final";
		
		 List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
			lstConteos.add(gerDataSelect(rows));
		 
		
		
		
		//Dia seleccionado
			 sql = "SELECT estatus_final, COUNT(*) contador,'Dia Seleccionado' dia  FROM bajo_efectivo_historico "
					+ "where trunc(fecha_final)=trunc(to_date('"+fecha+"', 'dd/mm/yyyy')) and numcasets="+elCajeroTiene+ " and "
					+ "( estatus_final=8 or   estatus_final=9 or   estatus_final=10 or   estatus_final=11 )"
					+ "GROUP BY estatus_final";

			rows=null;
			rows = getJdbcTemplate().queryForList(sql);
		
		
		
		 
		 
		 
		 
		 lstConteos.add(gerDataSelect(rows));

		return lstConteos;
	
		
	}

	public Conteos gerDataSelect( List<Map<String, Object>> rows){
		Conteos cont=new Conteos();
			for (Map row : rows) {
				cont.setDia(row.get("dia").toString());
			
			switch (Integer.parseInt(row.get("estatus_final").toString())){
			
			case 8:
			cont.setErrorCaset(Integer.parseInt(row.get("contador").toString()));
				break;
			case 9:
				cont.setDotacionRe(Integer.parseInt(row.get("contador").toString()));
				break;
			case 10:
				cont.setDotacionPro(Integer.parseInt(row.get("contador").toString()));
				break;
			case 11:
				cont.setCasRechazo(Integer.parseInt(row.get("contador").toString()));
				break;
				
			}
			
		}
			return cont;
	}

	
	

	
		

		
	
		
}
