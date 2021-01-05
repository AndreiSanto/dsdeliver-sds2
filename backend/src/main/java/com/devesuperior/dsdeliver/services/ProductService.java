package com.devesuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devesuperior.dsdeliver.dto.ProductDTO;
import com.devesuperior.dsdeliver.entities.Product;
import com.devesuperior.dsdeliver.repositor.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	@Transactional(readOnly = true)
	public List<ProductDTO> finAll(){
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}
