/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.repository;

import com.zembarang.demo.entity.Product;
import com.zembarang.demo.entity.ProductCategory;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author D
 */
@Repository
public interface productRepository extends CrudRepository<Product, String> {
    @Query(value = "SELECT * FROM product JOIN product_category ON product.id_product_category = product_category.id_product_category WHERE product.active_product = 'true'", nativeQuery = true)
    Iterable <Product> getActiveProduct();
    
    @Query(value = "SELECT * FROM product JOIN product_category ON product.id_product_category = product_category.id_product_category WHERE id_product = :id", nativeQuery = true)
    List <Product> getById(@Param(value="id") String id);
}
