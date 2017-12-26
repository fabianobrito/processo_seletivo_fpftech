package com.fpftech.prova.repositories;

import org.springframework.data.repository.CrudRepository;

import com.fpftech.prova.domain.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
