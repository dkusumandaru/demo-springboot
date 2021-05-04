/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceinterface;

import com.zembarang.demo.entity.ProductCategory;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author D
 */
public interface productCategoryServiceInterface {
    Iterable<ProductCategory> getActiveProductCategory(); 
    Iterable<ProductCategory> getAll(); 
    Optional<ProductCategory> findById(String id);
//    List<ProductCategory> getMax();
    void deleleteById(String id);
    void save(ProductCategory productCategory);
    public ProductCategory update(ProductCategory productCategory);
    List<ProductCategory> getById(Integer id);
}
