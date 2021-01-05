package com.devesuperior.dsdeliver.repositor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devesuperior.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findAllByOrderByNameAsc();
	
}
