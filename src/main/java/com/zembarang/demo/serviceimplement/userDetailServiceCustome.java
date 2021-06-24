/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceimplement;

import com.zembarang.demo.entity.NewUserDetails;
import com.zembarang.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author D
 */
@Service
public class userDetailServiceCustome implements UserDetailsService{

    @Autowired
    private userService uService;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        User user = uService.getEmailUser(username);
        
        
        String email = user.getEmailUser();
        String password = user.getPasswordUser();
        String role = user.getTypeUser();
        
        
        
        return new NewUserDetails(email, password, role);
    }


    
}
