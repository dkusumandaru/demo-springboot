/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.entity.controller;

import com.zembarang.demo.entity.Product;
import com.zembarang.demo.serviceimplement.productService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author D
 */
@Controller
@RequestMapping
public class ProductController {
    
    @Autowired
    productService productService;

    @GetMapping("/product")
    public String getProduct(Model model) {
        
        Iterable<Product> product = productService.getAll();
        model.addAttribute("product", product);
        
        Product productCrud = new Product();
        model.addAttribute("addProduct", productCrud);        
        model.addAttribute("editProduct", productCrud);
        model.addAttribute("removeProduct", productCrud);
        
        return "product/v_page_product";
    }
    
}
