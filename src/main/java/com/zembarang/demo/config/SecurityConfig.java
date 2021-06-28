/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 *
 * @author D
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    DataSource dataSource;
    
    // TAMBAHI CUSTOM SUCCESS HANDLER
    @Autowired
    SecurityCustomSuccessHandler customSuccessHandler;
    
    @Autowired
    UserDetailsService userDetailService;
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public JdbcUserDetailsManager jdbcUserDetailsManager() throws Exception{
        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager();
        jdbcUserDetailsManager.setDataSource(dataSource);
        return jdbcUserDetailsManager;
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailService)
            .passwordEncoder(passwordEncoder());
    }

    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/product*").hasRole("admin")
                .antMatchers("/product").hasAnyRole("admin", "user")
                .antMatchers("/").permitAll()
                .antMatchers("/password/forgot").permitAll()
                .antMatchers(HttpMethod.POST, "/password/forgot/request").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .successHandler(customSuccessHandler)
                .usernameParameter("email")
                .passwordParameter("password")
                .failureUrl("/department")
                .permitAll()
                .and().csrf()
                .and()
                .exceptionHandling()
                .accessDeniedPage("/accsess_denied")
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .addLogoutHandler(new SecurityLogout())
                .logoutSuccessUrl("/loginPage");
    }
    
    
//    @Bean
//    public PasswordEncoder getPasswordEncoder(){
//        return NoOpPasswordEncoder.getInstance();
//    }
    
    
}
