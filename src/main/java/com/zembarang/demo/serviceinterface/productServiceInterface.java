/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceinterface;

import com.zembarang.demo.entity.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author D
 */
public interface productServiceInterface {
    Iterable<Product> getAll(); 
    Iterable <Product> getActiveProduct();
//    Optional<Product> getById(String id);
    void deleleteById(String id);
    void save(Product product);
    List <Product> getById(String id);
//    Iterable<Product> getProductActive(); 
}
