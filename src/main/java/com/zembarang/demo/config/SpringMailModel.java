/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.config;

/**
 *
 * @author D
 */
public class SpringMailModel {
    private String name;
    private String to;
    private String from;
    private String subject;
    private String content;

    public SpringMailModel(String name, String to, String from, String subject, String content) {
        this.name = name;
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "SpringMailModel{" + "name=" + name + ", to=" + to + ", from=" + from + ", subject=" + subject + ", content=" + content + '}';
    }
    
    
    
}
