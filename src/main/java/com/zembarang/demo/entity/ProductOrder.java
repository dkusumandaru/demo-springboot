/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zembarang.demo.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author D
 */
@Entity
@Table(name = "product_order")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ProductOrder.findAll", query = "SELECT p FROM ProductOrder p")
    , @NamedQuery(name = "ProductOrder.findByIdOrder", query = "SELECT p FROM ProductOrder p WHERE p.idOrder = :idOrder")
    , @NamedQuery(name = "ProductOrder.findByDateOrder", query = "SELECT p FROM ProductOrder p WHERE p.dateOrder = :dateOrder")
    , @NamedQuery(name = "ProductOrder.findByPriceOrder", query = "SELECT p FROM ProductOrder p WHERE p.priceOrder = :priceOrder")
    , @NamedQuery(name = "ProductOrder.findByStatusOrder", query = "SELECT p FROM ProductOrder p WHERE p.statusOrder = :statusOrder")})
public class ProductOrder implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 24)
    @Column(name = "id_order")
    private String idOrder;
    @Basic(optional = false)
    @NotNull
    @Column(name = "date_order")
    @Temporal(TemporalType.DATE)
    private Date dateOrder;
    @Basic(optional = false)
    @NotNull
    @Column(name = "price_order")
    private int priceOrder;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 7)
    @Column(name = "status_order")
    private String statusOrder;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idOrder", fetch = FetchType.LAZY)
    private List<ProductPayment> productPaymentList;
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private User idUser;
    @JoinColumn(name = "id_product", referencedColumnName = "id_product")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Product idProduct;

    public ProductOrder() {
    }

    public ProductOrder(String idOrder) {
        this.idOrder = idOrder;
    }

    public ProductOrder(String idOrder, Date dateOrder, int priceOrder, String statusOrder) {
        this.idOrder = idOrder;
        this.dateOrder = dateOrder;
        this.priceOrder = priceOrder;
        this.statusOrder = statusOrder;
    }

    public String getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(String idOrder) {
        this.idOrder = idOrder;
    }

    public Date getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(Date dateOrder) {
        this.dateOrder = dateOrder;
    }

    public int getPriceOrder() {
        return priceOrder;
    }

    public void setPriceOrder(int priceOrder) {
        this.priceOrder = priceOrder;
    }

    public String getStatusOrder() {
        return statusOrder;
    }

    public void setStatusOrder(String statusOrder) {
        this.statusOrder = statusOrder;
    }

    @XmlTransient
    public List<ProductPayment> getProductPaymentList() {
        return productPaymentList;
    }

    public void setProductPaymentList(List<ProductPayment> productPaymentList) {
        this.productPaymentList = productPaymentList;
    }

    public User getIdUser() {
        return idUser;
    }

    public void setIdUser(User idUser) {
        this.idUser = idUser;
    }

    public Product getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Product idProduct) {
        this.idProduct = idProduct;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idOrder != null ? idOrder.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ProductOrder)) {
            return false;
        }
        ProductOrder other = (ProductOrder) object;
        if ((this.idOrder == null && other.idOrder != null) || (this.idOrder != null && !this.idOrder.equals(other.idOrder))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.zembarang.demo.entity.ProductOrder[ idOrder=" + idOrder + " ]";
    }
    
}
