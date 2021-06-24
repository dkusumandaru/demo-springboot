/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.repository;

import com.zembarang.demo.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author D
 */
public interface userRepository extends CrudRepository<User, String>{
        @Query(value = "SELECT * FROM user WHERE email_user = :email", nativeQuery = true)
	public User getEmail(@Param("email") String emailUser);
        
        @Query(value = "SELECT user.password_user FROM user WHERE password_user = :password", nativeQuery = true)
	public User getPassowrd(@Param("password") String passwordUser);
}
