/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceimplement;

import java.io.IOException;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Service;

/**
 *
 * @author D
 */
@Service
public class apiGatewayService {
    
    public String Get(String path) 
        throws IOException {

//        String url = "http://localhost:8074/api/holiday.json";
        String url = path;
        HttpGet request = new HttpGet(url);

        request.setHeader("Content-type", "application/json");
        HttpClient client = HttpClientBuilder.create().build();

        HttpResponse response = client.execute(request);
        HttpEntity entity = response.getEntity();
        String data = EntityUtils.toString(entity);
        
        return data;
    }
    
}
