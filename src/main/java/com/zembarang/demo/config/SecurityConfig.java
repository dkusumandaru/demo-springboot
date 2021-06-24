/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 *
 * @author D
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Autowired
    UserDetailsService userDetailService;
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailService)
                .passwordEncoder(passwordEncoder());
                //To change body of generated methods, choose Tools | Templates.
    }

    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/product*").hasRole("admin")
                .antMatchers("/product").hasAnyRole("admin", "user")
                .antMatchers("/").permitAll()
                .antMatchers("/password/forgot").permitAll()
//                .antMatchers("").permitAll()
                .antMatchers(HttpMethod.POST, "/password/forgot/request").permitAll()
                .antMatchers("/password/reset").permitAll()
//                .antMatchers("/").permitAll()
                .and()
                .formLogin();
    }
    
    
//    @Bean
//    public PasswordEncoder getPasswordEncoder(){
//        return NoOpPasswordEncoder.getInstance();
//    }
    
    
}
