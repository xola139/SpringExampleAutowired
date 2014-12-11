package com.elkardumen.dao;

import java.util.List;

import com.elkardumen.bean.Customer;

public interface CustomerDAO 
{
	public void insert(Customer customer);
	public void insertNamedParameter(Customer customer);
	public void insertBatch(List<Customer> customer);
	public void insertBatchNamedParameter(List<Customer> customer);
	public void insertBatchNamedParameter2(List<Customer> customer);
	public void insertBatchSQL(String sql);
	public Customer findByCustomerId(int custId);
	public Customer findByCustomerId2(int custId);
	public List<Customer> findAll();
	public List<Customer> findAll2();
	public String findCustomerNameById(int custId);
	public int findTotalCustomer();
	public void updateCustomer(Customer customer) ;
	public void  deleteCustomer(Customer customer) ; 
}



