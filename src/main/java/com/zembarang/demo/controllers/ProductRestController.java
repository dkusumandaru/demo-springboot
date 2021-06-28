/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.controllers;

import io.swagger.annotations.ApiOperation;
import java.io.IOException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author D
 */
@RestController
public class ProductRestController {
    
//        public Boolean checkStatus(String data) {
//            Boolean result;
//            try {
//                JSONObject dataObject = new JSONObject(data);
//                Integer status = dataObject.getInt("status");
//                
//                System.out.println("Gateway : "+status);
//
//                if (status.equals(200)) {
//                    result = true;
//                } else {
//                    result = false;
//                }
//            } catch (Exception e) {
//                result = true;
//            }
//            System.out.println("check response : "+result);
//            return result;
//        }

    
    @RequestMapping(value = "/holiday", method = RequestMethod.GET)
//    @ApiOperation(value = "${product.holiday}")
    public String getHolyday() 
        throws IOException {

        String url = "http://localhost:8074/api/holiday.json";

        HttpGet request = new HttpGet(url);

       
//        request.setHeader("Autho", key);
//        request.setHeader("Accept", "*/*");
        request.setHeader("Content-type", "application/json");
//        request.setHeader("Connection", "keep-alive");
        
        HttpClient client = HttpClientBuilder.create().build();

        HttpResponse response = client.execute(request);
        HttpEntity entity = response.getEntity();
        String data = EntityUtils.toString(entity);
        
//        System.out.println(url+ path);
//        Boolean checkStatusRespon = checkStatus(data);
//        String result;
//        if (checkStatusRespon.equals(true)) {
//            result = data;
//        }else{
//            result = "false";
//        }
        
        return data;
    }
}
