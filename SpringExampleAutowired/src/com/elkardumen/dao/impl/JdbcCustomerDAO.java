package com.elkardumen.dao.impl;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.elkardumen.bean.Customer;
import com.elkardumen.bean.CustomerRowMapper;
import com.elkardumen.dao.CustomerDAO;

public class JdbcCustomerDAO extends JdbcDaoSupport implements CustomerDAO
{
	
	public void deleteCustomer(Customer c) {
		String sql=" delete from LOSUSUARIOS "+
					" WHERE usr_id=?";
	        this.getJdbcTemplate().update(sql,new Object[]{c.getUsr_id()});
	    }
	 
	public void updateCustomer(Customer c) {
		String sql=" update LOSUSUARIOS "+
				" set usr_nombre=?,usr_password=?, usr_nombrecompleto=?,usr_nivel=?"+
				" WHERE usr_id=?";
	        this.getJdbcTemplate().update(sql,new Object[]{c.getUsr_nombre(),c.getUsr_password(),c.getUsr_nombrecompleto(),c.getUsr_nivel(),c.getUsr_id()});
	    }
	 
	
	//insert example
	public void insert(Customer c){
		String sql = "INSERT INTO LOSUSUARIOS (USR_ID,USR_NOMBRE,USR_PASSWORD,USR_NOMBRECOMPLETO,USR_NIVEL)" +" VALUES (?, ?, ?, ? , ? )";
		getJdbcTemplate().update(sql, new Object[] {c.getUsr_id(),c.getUsr_nombre(),c.getUsr_password(),c.getUsr_nombrecompleto(),Integer.valueOf(c.getUsr_nivel())});
	}
	
	//query single row with RowMapper
	public Customer findByCustomerId(int Id){
			String sql = "SELECT * FROM LOSUSUARIOS WHERE USR_ID = ?";
			Customer customer = (Customer)getJdbcTemplate().queryForObject(sql, new Object[] { Id }, new CustomerRowMapper());
		
			return customer;
	}
		
	public List<Customer> findAll(){
			String sql = "SELECT * FROM CUSTOMER";
			List<Customer> customers = new ArrayList<Customer>();
			List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

			for (Map row : rows) {
				Customer customer = new Customer();
				customer.setUsr_id((Long.valueOf(row.get("cust_id").toString())));
				customer.setUsr_nombre(row.get("name").toString());
				customer.setEdad(Integer.valueOf(row.get("age").toString()));
//				customer.setUsr_password(row.get("usr_password").toString());
//				customer.setUsr_nombrecompleto(row.get("usr_nombrecompleto").toString());
//				customer.setUsr_nivel(row.get("usr_nivel")!=null ? row.get("usr_nivel").toString():"");
				customers.add(customer);

			}

			return customers;
		}
	
	
	//insert with named parameter
	public void insertNamedParameter(Customer customer){
		
		//not supported
			
	}
	
	//insert batch example
	public void insertBatch(final List<Customer> customers){
		
		String sql = "INSERT INTO LOSUSUARIOS (CUST_ID, NAME, AGE) VALUES (?, ?, ?)";
		getJdbcTemplate().batchUpdate(sql, new BatchPreparedStatementSetter() {
			
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Customer customer = customers.get(i);
//				ps.setLong(1, customer.getCustId());
//				ps.setString(2, customer.getName());
//				ps.setInt(3, customer.getAge() );
			}
			
			@Override
			public int getBatchSize() {
				return customers.size();
			}
		});
	}

	//insert batch with named parameter
	public void insertBatchNamedParameter(final List<Customer> customers){
		
		//not supported
	}	
	
	//insert batch with named parameter
	public void insertBatchNamedParameter2(final List<Customer> customers){
		
		//not supported
	}	
	
	//insert batch example with SQL
	public void insertBatchSQL(final String sql){
		
		getJdbcTemplate().batchUpdate(new String[]{sql});
		
	}
	
	//query single row with BeanPropertyRowMapper (Customer.class)
	public Customer findByCustomerId2(int custId){
		 
		String sql = "SELECT * FROM LOSUSUARIOS WHERE CUST_ID = ?";
		Customer customer = (Customer)getJdbcTemplate().queryForObject(sql, new Object[] { custId },new BeanPropertyRowMapper(Customer.class));
	
		return customer;
	}
	
	//query mutiple rows with BeanPropertyRowMapper (Customer.class)
	public List<Customer> findAll2(){
		
		String sql = "SELECT * FROM LOSUSUARIOS";
		List<Customer> customers  = getJdbcTemplate().query(sql,new BeanPropertyRowMapper(Customer.class));
		return customers;
	}
	
	public String findCustomerNameById(int custId){
		
		String sql = "SELECT NAME FROM LOSUSUARIOS WHERE CUST_ID = ?";
		String name = (String)getJdbcTemplate().queryForObject(sql, new Object[] { custId }, String.class);
	
		return name;
		
	}
	
	public int findTotalCustomer(){
		
		String sql = "SELECT COUNT(*) FROM LOSUSUARIOS";
		int total = getJdbcTemplate().queryForInt(sql);
				
		return total;
	}
	
	
}
