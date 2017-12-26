package com.fpftech.prova.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fpftech.prova.domain.Product;
import com.fpftech.prova.services.ProductService;

@RestController
public class ProductController {

	private ProductService productService;

	@Autowired
	public void setProductService(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping("/product")
	public List<Product> listProducts() {
		return productService.listAll();
	}

	@GetMapping("/product/{id}")
	public ResponseEntity<?> getProduct(@PathVariable("id") Long id) {
		Product product = productService.getById(id);

		if (product == null) {
			return new ResponseEntity<String>("No Product found for ID " + id, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Product>(product, HttpStatus.OK);
	}

	@PostMapping(value = "/product")
	public ResponseEntity<Product> saveOrUpdateProduct(@RequestBody Product product) {
		productService.saveOrUpdateProduct(product);
		return new ResponseEntity<Product>(product, HttpStatus.OK);
	}

	@DeleteMapping("/product/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {

		productService.delete(id);
		return new ResponseEntity<Object>(id, HttpStatus.OK);
	}

	@PutMapping("/product/{id}")
	public ResponseEntity<?> updateCustomer(@RequestBody Product product) {

		productService.saveOrUpdateProduct(product);
		return new ResponseEntity<Product>(product, HttpStatus.OK);
	}
}
