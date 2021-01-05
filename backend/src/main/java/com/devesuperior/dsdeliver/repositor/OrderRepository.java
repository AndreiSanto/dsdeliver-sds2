package com.devesuperior.dsdeliver.repositor;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devesuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
