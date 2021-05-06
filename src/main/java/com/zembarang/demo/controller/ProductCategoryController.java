/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.controller;

import com.google.common.collect.ArrayListMultimap;
import com.zembarang.demo.config.skylightSupportModalCrud;
import com.zembarang.demo.entity.ProductCategory;
import com.zembarang.demo.serviceimplement.productCategoryService;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author D
 */
@Controller
public class ProductCategoryController {
 
    @Autowired
    productCategoryService productCategoryService;
    
    @Autowired
    skylightSupportModalCrud skylightSupportModalCrud;
    
    @GetMapping("/product/category")
    public String getRole(Model productCategoryModel) {
        
        Iterable<ProductCategory> productCategories = productCategoryService.getActiveProductCategory();
        productCategoryModel.addAttribute("category", productCategories);

        ProductCategory category = new ProductCategory();
        productCategoryModel.addAttribute("add", category);        
        productCategoryModel.addAttribute("edit", category);
        productCategoryModel.addAttribute("remove", category);
        
        Map<String, String> configControl = skylightSupportModalCrud.config("true", "true", "false", "true", "false");
        productCategoryModel.addAttribute("control", configControl);
        
        System.out.println(configControl.containsValue("add"));
        System.out.println(category);
        return "product/v_page_product_category";
    }
    
    public Integer generateId(){
        Integer id = 0;
        Integer idBigger = 0;
        Integer idAccess = 0;
        Iterable<ProductCategory> productCategoryList = productCategoryService.getAll();
        for (ProductCategory i : productCategoryList) {
            idAccess = i.getIdProductCategory();
            if(idAccess > idBigger){
                idBigger = idAccess;
            }else{
                idBigger = idBigger;
            }
        }
        id = idBigger+1;
        return id;
    }
            
    @RequestMapping(value = "/product/category/add", method = RequestMethod.POST)
    public String addProductCategory(
        @RequestParam(value = "category_name_add", required = false) String nameProductCategory
    ){
        String activeProductCategory = "true";
        System.out.println("Here ^_^");

        Integer idProductCategory = generateId();
        
        
        System.out.println(idProductCategory);

        
        ProductCategory productCategory = new ProductCategory(idProductCategory, nameProductCategory, activeProductCategory);
        productCategory.setIdProductCategory(idProductCategory);
        productCategory.setNameProductCategory(nameProductCategory);
        productCategory.setActiveProductCategory(activeProductCategory);
        
//        
        this.productCategoryService.save(productCategory);
        return "redirect:/product/category";
    }

    @RequestMapping(value = "/product/category/edit", method = RequestMethod.POST)
    public String editProductCategory(
        @RequestParam(value = "category_id_edit", required = false) Integer idProductCategory,
        @RequestParam(value = "category_name_edit", required = false) String nameProductCategory
    ){
        String activeProductCategory = "true";
        ProductCategory productCategory = new ProductCategory(idProductCategory, nameProductCategory, activeProductCategory);
        productCategory.setIdProductCategory(idProductCategory);
        productCategory.setNameProductCategory(nameProductCategory);
        productCategory.setActiveProductCategory(activeProductCategory);
        
        this.productCategoryService.save(productCategory);
        return "redirect:/product/category";
    }    
    
    @RequestMapping(value = "/product/category/remove", method = RequestMethod.POST)
    public String removeProductCategory(
        @RequestParam(value = "category_id_remove", required = false) Integer idProductCategory
    ){
        String activeProductCategory = "false";
        String nameProductCategory = "";


        List<ProductCategory> productCategoryDetail = productCategoryService.getById(idProductCategory);
        System.out.println(productCategoryDetail);
        for (ProductCategory i : productCategoryDetail) {
            nameProductCategory = i.getNameProductCategory();
            System.out.println(nameProductCategory);
        }
        
        ProductCategory productCategory = new ProductCategory(idProductCategory, nameProductCategory, activeProductCategory);
        productCategory.setIdProductCategory(idProductCategory);
        productCategory.setNameProductCategory(nameProductCategory);
        productCategory.setActiveProductCategory(activeProductCategory);
        
        this.productCategoryService.save(productCategory);
        return "redirect:/product/category";
    }  

    
}