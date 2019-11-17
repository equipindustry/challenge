import React, { Component } from 'react';
import CreateProduct from './CreateProduct.js';
import ProductList from './productList'
import '../styles/updatecompany.css'
import { connect } from 'react-redux'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProductsOpen: true, isCreateOpen: false
        }
    }
    showCreateBox() {
        this.setState({ isProductsOpen: true, isCreateOpen: false })
    }
    showProductsBox() {
        this.setState({ isCreateOpen: true, isProductsOpen: false })
    }
    render() {

        const { projects } = this.props

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
                        <button className={"btn " + (this.state.isProductsOpen ? "hide" : "")} onClick={this.showCreateBox.bind(this)} >See Products</button>
                        <button className={"btn " + (this.state.isCreateOpen ? "hide" : "")} onClick={this.showProductsBox.bind(this)} > Create Product</button>
                    </div>

                    {this.state.isProductsOpen && <ProductList projects={projects} />}
                    {this.state.isCreateOpen && <CreateProduct />}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.products
    }
}

export default connect(mapStateToProps)(Products);