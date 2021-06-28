/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.controllers;

import com.zembarang.demo.config.skylightSupportModalCrud;
import com.zembarang.demo.entity.Product;
import com.zembarang.demo.entity.ProductCategory;
import com.zembarang.demo.serviceimplement.apiGatewayService;
import com.zembarang.demo.serviceimplement.productCategoryService;
import com.zembarang.demo.serviceimplement.productService;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author D
 */
@Controller
@RequestMapping
public class ProductController {
    
    @Autowired
    productService productService;
    
    @Autowired
    productCategoryService productCategoryService;
    
    @Autowired
    skylightSupportModalCrud skylightSupportModalCrud;
    
    @Autowired
    apiGatewayService apiService;

    @GetMapping("/product")
    public String getProduct(Model model) throws IOException {
        
        Iterable<Product> product = productService.getActiveProduct();
        model.addAttribute("product", product);
        
        String path = "http://localhost:8074/api/holiday.json";
        String data = apiService.Get(path);
        
        org.json.JSONObject dataObject = new org.json.JSONObject(data);
        
        
//        Product productCrud = new Product();
//        model.addAttribute("add", productCrud);        
//        model.addAttribute("editProduct", productCrud);
//        model.addAttribute("removeProduct", productCrud);
        model.addAttribute("holiday", dataObject);


        Iterable<ProductCategory> category = productCategoryService.getActiveProductCategory();

        JSONObject option = new JSONObject();
        JSONArray temp = new JSONArray();
        
        for(ProductCategory i : category){
            JSONObject tempSub = new JSONObject();
            tempSub.put("product_category_id", i.getIdProductCategory());
            tempSub.put("product_category_name", i.getNameProductCategory());
            temp.add(tempSub);
        }
        
        option.put("product_category", temp);
        model.addAttribute("option", option);


        return "product/v_page_product";
    }
    
    
    public String generateId(){
        Integer id = 0;
        Integer idBigger = 0;
        Integer idAccess = 0;
        String idGet = "";
        String code = "PD";
        String idUnix = "";
        String zero = "";
        
        String lastFourDigitsString = "";
        
        Iterable<Product> productList = productService.getAll();
        for (Product i : productList) {
            idGet = i.getIdProduct();
            lastFourDigitsString = idGet.substring(idGet.length() - 4);
            idAccess = Integer.parseInt(lastFourDigitsString);
            System.out.println(idAccess);
            if(idAccess > idBigger){
                idBigger = idAccess;
            }
        }
        
        id = idBigger+1;
        System.out.println(id);
        String idStr = id.toString();
        // PD0001
        if (id == 0 || id < 10) {
            zero = "000";
        }else if (id == 10 || id < 100){
            zero = "00";
        }else if (id == 100 || id < 1000){
            zero = "0";
        }else if (id == 1000 || id < 10000){
            zero = "";
        }
        idUnix = code+zero+idStr;
        
        System.out.println(idUnix);
        return idUnix;
    }
    
    @RequestMapping(value = "/product/add", method = RequestMethod.POST)
    public String addProductCategory(
        @RequestParam(value = "product_name_add", required = false) String nameProduct,
        @RequestParam(value = "product_describe_add", required = false) String describeProduct,
        @RequestParam(value = "product_price_add", required = false) Integer priceProduct,
        @RequestParam(value = "product_amount_add", required = false) Integer amountProduct,      
        @RequestParam(value = "product_category_id_select_add", required = false) String idProductCategory      
    ){
        String idProduct = generateId();
        String activeProduct = "true";
       
        int idProductCategoryInt = Integer.parseInt(idProductCategory);
        Object idProductCategoryObject = new ProductCategory(idProductCategoryInt);
        
        Product product = new Product(idProduct, nameProduct, describeProduct, priceProduct, amountProduct, activeProduct, idProductCategoryObject);
        product.setIdProduct(idProduct);
        product.setNameProduct(nameProduct);
        product.setDescribeProduct(describeProduct);
        product.setPriceProduct(priceProduct);
        product.setAmountProduct(amountProduct);
        product.setActiveProduct(activeProduct);
        product.setIdProductCategory(idProductCategoryObject);

        this.productService.save(product);
        return "redirect:/product";
    }

    
    @RequestMapping(value = "/product/edit", method = RequestMethod.POST)
    public String editProductCategory(
        @RequestParam(value = "product_id_edit", required = false) String idProduct,
        @RequestParam(value = "product_name_edit", required = false) String nameProduct,
        @RequestParam(value = "product_describe_edit", required = false) String describeProduct,
        @RequestParam(value = "product_price_edit", required = false) Integer priceProduct,
        @RequestParam(value = "product_amount_edit", required = false) Integer amountProduct,      
        @RequestParam(value = "product_category_id_select_edit", required = false) String idProductCategory
    ){
        String activeProduct = "true";
        int idProductCategoryInt = Integer.parseInt(idProductCategory);
        Object idProductCategoryObject = new ProductCategory(idProductCategoryInt);        
        
        Product product = new Product(idProduct, nameProduct, describeProduct, priceProduct, amountProduct, activeProduct, idProductCategoryObject);
        product.setIdProduct(idProduct);
        product.setNameProduct(nameProduct);
        product.setDescribeProduct(describeProduct);
        product.setPriceProduct(priceProduct);
        product.setAmountProduct(amountProduct);
        product.setActiveProduct(activeProduct);
        product.setIdProductCategory(idProductCategoryObject);
        
        this.productService.save(product);
        return "redirect:/product";
    }    
    
    @RequestMapping(value = "/product/remove", method = RequestMethod.POST)
    public String removeProductCategory(
        @RequestParam(value = "product_id_remove", required = false) String idProduct
    ){
        String activeProduct = "false";
        String nameProduct = "";
        String describeProduct = "";
        int priceProduct = 0;
        int amountProduct = 0;
        String idProductCategoryObject = "";

        List<Product> productDetail = productService.getById(idProduct);
        System.out.println(productDetail);
        for (Product i : productDetail) {
            nameProduct = i.getNameProduct();
        }
       
        Product product = new Product(idProduct, nameProduct, describeProduct, priceProduct, amountProduct, activeProduct, idProductCategoryObject);
        product.setIdProduct(idProduct);
        product.setNameProduct(nameProduct);
        product.setDescribeProduct(describeProduct);
        product.setPriceProduct(priceProduct);
        product.setAmountProduct(amountProduct);
        product.setActiveProduct(activeProduct);
        product.setIdProductCategory(idProductCategoryObject);
        
        this.productService.save(product);
        return "redirect:/product";
    } 
    
}
