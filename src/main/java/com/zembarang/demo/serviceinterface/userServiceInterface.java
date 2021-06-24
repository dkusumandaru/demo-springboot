/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.serviceinterface;

import com.zembarang.demo.entity.User;

/**
 *
 * @author D
 */
public interface userServiceInterface {
    User getEmailUser(String emailUser);
    User getPasswordUser(String passwordUser);
}
