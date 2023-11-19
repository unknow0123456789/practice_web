package com.example.demo.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Product_repository extends JpaRepository<product,Integer> {
}