/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author D
 */
@Entity
@Table(name = "product_payment")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ProductPayment.findAll", query = "SELECT p FROM ProductPayment p")
    , @NamedQuery(name = "ProductPayment.findByIdPayment", query = "SELECT p FROM ProductPayment p WHERE p.idPayment = :idPayment")
    , @NamedQuery(name = "ProductPayment.findByDatePayment", query = "SELECT p FROM ProductPayment p WHERE p.datePayment = :datePayment")})
public class ProductPayment implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 32)
    @Column(name = "id_payment")
    private String idPayment;
    @Basic(optional = false)
    @NotNull
    @Column(name = "date_payment")
    @Temporal(TemporalType.DATE)
    private Date datePayment;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "img_payment")
    private String imgPayment;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "descript_payment")
    private String descriptPayment;
    @JoinColumn(name = "id_order", referencedColumnName = "id_order")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private ProductOrder idOrder;

    public ProductPayment() {
    }

    public ProductPayment(String idPayment) {
        this.idPayment = idPayment;
    }

    public ProductPayment(String idPayment, Date datePayment, String imgPayment, String descriptPayment) {
        this.idPayment = idPayment;
        this.datePayment = datePayment;
        this.imgPayment = imgPayment;
        this.descriptPayment = descriptPayment;
    }

    public String getIdPayment() {
        return idPayment;
    }

    public void setIdPayment(String idPayment) {
        this.idPayment = idPayment;
    }

    public Date getDatePayment() {
        return datePayment;
    }

    public void setDatePayment(Date datePayment) {
        this.datePayment = datePayment;
    }

    public String getImgPayment() {
        return imgPayment;
    }

    public void setImgPayment(String imgPayment) {
        this.imgPayment = imgPayment;
    }

    public String getDescriptPayment() {
        return descriptPayment;
    }

    public void setDescriptPayment(String descriptPayment) {
        this.descriptPayment = descriptPayment;
    }

    public ProductOrder getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(ProductOrder idOrder) {
        this.idOrder = idOrder;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPayment != null ? idPayment.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ProductPayment)) {
            return false;
        }
        ProductPayment other = (ProductPayment) object;
        if ((this.idPayment == null && other.idPayment != null) || (this.idPayment != null && !this.idPayment.equals(other.idPayment))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.zembarang.demo.entity.ProductPayment[ idPayment=" + idPayment + " ]";
    }
    
}
