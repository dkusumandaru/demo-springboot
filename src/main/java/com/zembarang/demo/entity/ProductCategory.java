/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.entity;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Lob;
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
@Table(name = "product_category")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ProductCategory.findAll", query = "SELECT p FROM ProductCategory p")
    , @NamedQuery(name = "ProductCategory.findByIdProductCategory", query = "SELECT p FROM ProductCategory p WHERE p.idProductCategory = :idProductCategory")
    , @NamedQuery(name = "ProductCategory.findByActiveProductCategory", query = "SELECT p FROM ProductCategory p WHERE p.activeProductCategory = :activeProductCategory")})
public class ProductCategory implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_product_category")
    private Integer idProductCategory;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "name_product_category")
    private String nameProductCategory;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 5)
    @Column(name = "active_product_category")
    private String activeProductCategory;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idProductCategory", fetch = FetchType.LAZY)
    private Collection<Product> productCollection;

    public ProductCategory() {
    }

    public ProductCategory(Integer idProductCategory) {
        this.idProductCategory = idProductCategory;
    }

    public ProductCategory(Integer idProductCategory, String nameProductCategory, String activeProductCategory) {
        this.idProductCategory = idProductCategory;
        this.nameProductCategory = nameProductCategory;
        this.activeProductCategory = activeProductCategory;
    }

    public Integer getIdProductCategory() {
        return idProductCategory;
    }

    public void setIdProductCategory(Integer idProductCategory) {
        this.idProductCategory = idProductCategory;
    }

    public String getNameProductCategory() {
        return nameProductCategory;
    }

    public void setNameProductCategory(String nameProductCategory) {
        this.nameProductCategory = nameProductCategory;
    }

    public String getActiveProductCategory() {
        return activeProductCategory;
    }

    public void setActiveProductCategory(String activeProductCategory) {
        this.activeProductCategory = activeProductCategory;
    }

    @XmlTransient
    public Collection<Product> getProductCollection() {
        return productCollection;
    }

    public void setProductCollection(Collection<Product> productCollection) {
        this.productCollection = productCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idProductCategory != null ? idProductCategory.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ProductCategory)) {
            return false;
        }
        ProductCategory other = (ProductCategory) object;
        if ((this.idProductCategory == null && other.idProductCategory != null) || (this.idProductCategory != null && !this.idProductCategory.equals(other.idProductCategory))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.zembarang.demo.entity.ProductCategory[ idProductCategory=" + idProductCategory + " ]";
    }
    
}
