/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceimplement;

import com.zembarang.demo.entity.ProductCategory;
import com.zembarang.demo.repository.productCategoryRepository;
import com.zembarang.demo.serviceinterface.productCategoryServiceInterface;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author D
 */
@Service
public class productCategoryService implements productCategoryServiceInterface{
    @Autowired
    private productCategoryRepository ProductCategoryRepository;

    @Override
    public Iterable<ProductCategory> getActiveProductCategory() {
        return ProductCategoryRepository.getActiveProductCategory();  
    }
    
    @Override
    public Optional<ProductCategory> findById(String id) {
        return ProductCategoryRepository.findById(id);
    }

    @Override
    public void deleleteById(String id) {
        ProductCategoryRepository.deleteById(id);
    }

    @Override
    public void save(ProductCategory productCategory) {
        ProductCategoryRepository.save(productCategory);
    }

    @Override
    public ProductCategory update(ProductCategory productCategory) {
         return ProductCategoryRepository.save(productCategory);
    }

//    public List<ProductCategory> getById(Integer idProductCategory) {
//        return ProductCategoryRepository.findById(idProductCategory);   
//    }

    @Override
    public List<ProductCategory> getById(Integer id) {
        return ProductCategoryRepository.getById(id);
    }

//    @Override
//    public List<ProductCategory> getMax() {
//        return ProductCategoryRepository.getMax();
//    }

    @Override
    public Iterable<ProductCategory> getAll() {
        return ProductCategoryRepository.findAll();
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
