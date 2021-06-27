/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.repository;

import com.zembarang.demo.entity.ProductCategory;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author D
 */
@Repository
public interface productCategoryRepository extends CrudRepository<ProductCategory, String> {
    @Query(value = "SELECT * FROM product_category WHERE active_product_category = 'true'", nativeQuery = true)
    List <ProductCategory> getActiveProductCategory();
    
    @Query(value = "SELECT * FROM product_category WHERE id_product_category = :id", nativeQuery = true)
    List <ProductCategory> getById(@Param(value="id") Integer id);

//    @Query(value = "SELECT * FROM product_category", nativeQuery = true)
//    List <ProductCategory>  getMax();


}
