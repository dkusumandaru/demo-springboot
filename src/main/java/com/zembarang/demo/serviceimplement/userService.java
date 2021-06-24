/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceimplement;

import com.zembarang.demo.entity.User;
import com.zembarang.demo.repository.userRepository;
import com.zembarang.demo.serviceinterface.userServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author D
 */
@Service
public class userService implements userServiceInterface{

    @Autowired
    private userRepository userRepo;
    

    public User getEmailUser(String emailUser) {
        return userRepo.getEmail(emailUser);
    }

    @Override
    public User getPasswordUser(String passwordUser) {
        return userRepo.getPassowrd(passwordUser);
    }
    
}
