package com.devesuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devesuperior.dsdeliver.dto.OrderDTO;
import com.devesuperior.dsdeliver.dto.ProductDTO;
import com.devesuperior.dsdeliver.entities.Order;
import com.devesuperior.dsdeliver.entities.OrderStatus;
import com.devesuperior.dsdeliver.entities.Product;
import com.devesuperior.dsdeliver.repositor.OrderRepository;
import com.devesuperior.dsdeliver.repositor.ProductRepository;

@Service
public class OrderService {
	@Autowired
	private OrderRepository repository;
	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> finAll() {
		List<Order> list = repository.findOrdersWithProduct();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(),
				OrderStatus.PENDING);
		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
