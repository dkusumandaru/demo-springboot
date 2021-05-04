/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author D
 */
@Entity
@Table(name = "product")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Product.findAll", query = "SELECT p FROM Product p")
    , @NamedQuery(name = "Product.findByIdProduct", query = "SELECT p FROM Product p WHERE p.idProduct = :idProduct")
    , @NamedQuery(name = "Product.findByNameProduct", query = "SELECT p FROM Product p WHERE p.nameProduct = :nameProduct")
    , @NamedQuery(name = "Product.findByPriceProduct", query = "SELECT p FROM Product p WHERE p.priceProduct = :priceProduct")
    , @NamedQuery(name = "Product.findByAmountProduct", query = "SELECT p FROM Product p WHERE p.amountProduct = :amountProduct")})
public class Product implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "name_product")
    private String nameProduct;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "describe_product")
    private String describeProduct;
    @Basic(optional = false)
    @NotNull
    @Column(name = "price_product")
    private int priceProduct;
    @Basic(optional = false)
    @NotNull
    @Column(name = "amount_product")
    private int amountProduct;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 5)
    @Column(name = "active_product")
    private String activeProduct;
    @JoinColumn(name = "id_product_category", referencedColumnName = "id_product_category")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private ProductCategory idProductCategory;

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 6)
    @Column(name = "id_product")
    private String idProduct;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idProduct", fetch = FetchType.LAZY)
    private List<ProductOrder> productOrderList;

    public Product() {
    }

    public Product(String idProduct) {
        this.idProduct = idProduct;
    }

    public Product(String idProduct, String nameProduct, String describeProduct, int priceProduct, int amountProduct) {
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.describeProduct = describeProduct;
        this.priceProduct = priceProduct;
        this.amountProduct = amountProduct;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDescribeProduct() {
        return describeProduct;
    }

    public void setDescribeProduct(String describeProduct) {
        this.describeProduct = describeProduct;
    }

    public int getPriceProduct() {
        return priceProduct;
    }

    public void setPriceProduct(int priceProduct) {
        this.priceProduct = priceProduct;
    }

    public int getAmountProduct() {
        return amountProduct;
    }

    public void setAmountProduct(int amountProduct) {
        this.amountProduct = amountProduct;
    }

    @XmlTransient
    public List<ProductOrder> getProductOrderList() {
        return productOrderList;
    }

    public void setProductOrderList(List<ProductOrder> productOrderList) {
        this.productOrderList = productOrderList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idProduct != null ? idProduct.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Product)) {
            return false;
        }
        Product other = (Product) object;
        if ((this.idProduct == null && other.idProduct != null) || (this.idProduct != null && !this.idProduct.equals(other.idProduct))) {
            return false;
        }
        return true;
    }

 
    public String getActiveProduct() {
        return activeProduct;
    }

    public void setActiveProduct(String activeProduct) {
        this.activeProduct = activeProduct;
    }

    public ProductCategory getIdProductCategory() {
        return idProductCategory;
    }

    public void setIdProductCategory(ProductCategory idProductCategory) {
        this.idProductCategory = idProductCategory;
    }
    
}
