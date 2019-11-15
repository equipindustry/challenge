import React, { Component } from 'react';
import { products } from './products.json'
import CreateProduct from './CreateProduct.js';
import '../styles/updatecompany.css'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products,
            isProductsOpen: true, isCreateOpen: false
        }
        this.addProduct = this.addProduct.bind(this)
    }
    showCreateBox() {
        this.setState({ isProductsOpen: true, isCreateOpen: false })
    }
    showProductsBox() {
        this.setState({ isCreateOpen: true, isProductsOpen: false })
    }
    addProduct(product) {
        this.setState({
            products: [...this.state.products, product]
        })
    }
    removeProduct(index) {
        this.setState({
            products: this.state.products.filter((e, i) => {
                return i !== index
            })
        })
    }
    render() {
        let products = this.state.products.map((product, i) => {
            return (
                <li className="single-product" key={i}>
                    <div className="discount">{product.discount}</div>
                    <div className="img"></div>
                    <div className="inner">
                        <h5>{product.name} N°{i + 1}</h5>
                        <p>{product.price}</p>
                        <button className="btn">VIEW DETAILS</button>
                        <button className="btn" onClick={this.removeProduct.bind(this, i)}>Delete</button>
                    </div>
                </li>
            )
        })

        return (
            <section className="home products">
                <div className="section-company">
                    <div className="col-left">
                        <div className="box dos">
                            <h4>Chemifabrik SAC</h4>
                            <p>Excepture sint occaecat cuidatat non proident, sunt in culpa qui officia deserunt</p>
                            <a className="add-btn"> <small>Edit Company</small> +</a>
                        </div>
                    </div>
                    <div className="col-right">
                        <a className="start-btn">
                            <span>LEAVE COMPANY</span>
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="section-products">
                    <div className="section-products-header">
                        <h3>All Products</h3>
                        <button to='/CreateProduct' className={"btn " + (this.state.isProductsOpen ? "hide" : "")} onClick={this.showCreateBox.bind(this)} >See Products</button>
                        <button to='/CreateProduct' className={"btn " + (this.state.isCreateOpen ? "hide" : "")} onClick={this.showProductsBox.bind(this)} > Create Product</button>
                    </div>

                    {this.state.isProductsOpen && <ul className="container-product">
                        {products}

                    </ul>}
                    {this.state.isCreateOpen && <CreateProduct onAddProduct={this.addProduct} />}
                </div>
            </section>
        )
    }
}

export default Products;