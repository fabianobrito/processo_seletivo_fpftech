package com.fpftech.prova.services;

import java.util.List;

import com.fpftech.prova.domain.Product;

public interface ProductService {

    List<Product> listAll();

    Product getById(Long id);

    Product saveOrUpdate(Product product);

    void delete(Long id);

    Product saveOrUpdateProduct(Product product);
}