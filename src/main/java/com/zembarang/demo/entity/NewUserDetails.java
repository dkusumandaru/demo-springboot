/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.entity;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author D
 */
public class NewUserDetails implements UserDetails{
    
    private String usernameUser;
    private String passwordUser;
    private List<GrantedAuthority> authorities;

    public NewUserDetails(String usernameUser, String passwordUser, String roleUser) {
        this.usernameUser = usernameUser;
        this.passwordUser = passwordUser;
        this.authorities = Arrays.asList(new SimpleGrantedAuthority("ROLE_"+roleUser));
    }

    
    
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return passwordUser;
    }

    @Override
    public String getUsername() {
        return usernameUser;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
