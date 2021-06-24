/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.controllers;

import com.zembarang.demo.config.SpringMailServices;
import com.zembarang.demo.entity.User;
import com.zembarang.demo.serviceimplement.userService;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author D
 */
@Controller
public class PasswordController {
    
    @Autowired
    private userService uService;
    
    @Autowired
    private SpringMailServices smService;
    
    @GetMapping("/password/forgot")
    public String forgotpassword(){
        
        return "password/forgot.html";
    }
    
    
    @GetMapping("/password/reset")
    public String resetpassword(){
        
        return "password/reset.html";
    }
    
    @PostMapping("/password/forgot/request")
    public String requestforgotpassword(
            @RequestParam(value = "email", required = true) String email
    ){
        
        User getUser = uService.getEmailUser(email);
        
        String sender = getUser.getFullnameUser();     
        
        String key = UUID.randomUUID().toString(); 
        
            String subject = "Password Reset";
            String content = "Use code: " + key + ", or click on button bellow";
            String link = "http://localhost:8082/password/reset/";

            System.out.println("send mail running");

            Map<String, Object> model = new HashMap<>();
            model.put("title", subject);
            model.put("name", sender);
            model.put("messg", content);
            model.put("url", link);

            smService.sendMail(model, subject, email);
            return "redirect:/password/forgot";
        
    }
    
}
