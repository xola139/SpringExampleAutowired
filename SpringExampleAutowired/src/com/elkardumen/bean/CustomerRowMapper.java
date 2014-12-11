package com.elkardumen.bean;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class CustomerRowMapper implements RowMapper
{
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		Customer customer = new Customer();
		customer.setUsr_id(rs.getInt("usr_id"));
		customer.setUsr_nombre(rs.getString("usr_nombre"));
		customer.setUsr_password(rs.getString("usr_password"));
		customer.setUsr_nombrecompleto(rs.getString("usr_nombrecompleto"));
		customer.setUsr_nivel(rs.getString("usr_nivel"));
		return customer;
	}
	
}
