/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceimplement;

import com.zembarang.demo.entity.NewUserDetails;
import com.zembarang.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
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
    
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        
//        User user = uService.getEmailUser(username);
//        
//        
//        String email = user.getEmailUser();
//        String password = user.getPasswordUser();
//        String role = user.getTypeUser();
//        
//        
//        
//        return new NewUserDetails(email, password, role);
//    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Load user by email : " + username);

        NewUserDetails user = userConfig(username);
        
        org.springframework.security.core.userdetails.User.UserBuilder builder = null;
        if (user != null) {
            builder = org.springframework.security.core.userdetails.User.withUsername(username);
            builder.password(user.getPasswordUser());
            builder.roles(user.getRoleUser());
        }else{
            System.out.println("User Salah");
        }
        return builder.build();

    }

    private NewUserDetails userConfig(String username) {
        String password = null, role = null, id = null;
        User user = uService.getEmailUser(username);

        if (user != null) {
            user = uService.getEmailUser(username);
            if (user != null) {
                username = user.getEmailUser();
                password = user.getPasswordUser();
                //role = user.getIdRole().getNameRole();
                // THIS ONE GET ID AND NAME
                role = user.getTypeUser();
                id = user.getIdUser();
            } else {
                System.out.println("ACCESS DENIED");
            }
        }
        if (username.equalsIgnoreCase(username)) {
            return new NewUserDetails(username, password, role, id);
            //return new ThisUser(username, password, role,id);
        }
        return null;
    }

    
}
