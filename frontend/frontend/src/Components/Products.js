import React, { Component } from 'react';


class Products extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                    <h3>All Products</h3>
                    <ul>
                        <li>
                            <div className="discount"></div>
                            <div className="img"></div>
                            <div className="inner">
                                <h5>Product N°1</h5>
                                <p>$200.00</p>
                                <button className="btn">VIEW DETAILS</button>
                            </div>

                        </li>
                    </ul>

                </div>



            </section>

        )
    }


}

export default Products;