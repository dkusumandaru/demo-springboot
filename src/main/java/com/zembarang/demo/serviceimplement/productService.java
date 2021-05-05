/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceimplement;

import com.zembarang.demo.entity.Product;
import com.zembarang.demo.repository.productRepository;
import com.zembarang.demo.serviceinterface.productServiceInterface;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author D
 */
@Service
public class productService implements productServiceInterface{
    @Autowired
    private productRepository productRepository;

    @Override
    public Iterable<Product> getAll() {
        return productRepository.findAll();
    }

//    @Override
//    public Optional<Product> getById(String id) {
//        return productRepository.findById(id);
//    }

    @Override
    public void deleleteById(String id) {
        productRepository.deleteById(id);
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }

    @Override
    public Iterable<Product> getActiveProduct() {
        return productRepository.getActiveProduct();
    }

    @Override
    public List<Product> getById(String id) {
        return productRepository.getById(id);
    }
}
