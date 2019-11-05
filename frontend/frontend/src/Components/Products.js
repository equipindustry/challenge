import React, { Component } from 'react';

import CreateProduct from './CreateProduct'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            act: 0,
            index: '',
            datas: []
        }
    }
    componentDidMount() {
        this.refs.name.focus()
    }
    fSubmit = (e) => {
        e.preventDefault()
        console.log('try')

        let datas = this.state.datas
        let name = this.refs.name.value
        let price = this.refs.price.value
        let discount = this.refs.discount.value
        if (this.state.act === 0) {
            let data = {
                name, price, discount
            }
            datas.push(data)
        } else {
            let index = this.state.index
            datas[index].name = name
            datas[index].price = price
            datas[index].discount = discount
        }


        this.setState({
            datas: datas,
            act: 0
        })
        this.refs.myForm.reset()
        this.refs.name.focus()
    }
    fRemove = (i) => {
        let datas = this.state.datas
        datas.splice(i, 1)
        this.setState({
            datas: datas
        })
        this.refs.myForm.reset()
        this.refs.name.focus()
    }
    fEdit = (i) => {
        let data = this.state.datas[i]
        this.refs.name.value = data.name
        this.refs.price.value = data.price
        this.refs.discount.value = data.discount
        this.setState({
            act: 1,
            index: i
        })
        this.refs.name.focus()

    }

    render() {
        let datas = this.state.datas
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
                        <button to='/CreateProduct' className="btn">Create Product</button>
                    </div>


                    <form ref="myForm" className="myForm" >
                        <input type="text" ref="name" placeholder="Name Product" />
                        <input type="text" ref="price" placeholder="Price " />
                        <input type="text" ref="discount" placeholder="Discount " />
                        <button onClick={this.fSubmit} className="btn" >Create Now</button>
                    </form>


                    <ul className="container-product">
                        <li className="single-product">
                            <div className="discount">-20%</div>
                            <div className="img"></div>
                            <div className="inner">
                                <h5>Product N°1</h5>
                                <p>$200.00</p>
                                <button className="btn">VIEW DETAILS</button>
                            </div>
                        </li>
                        {datas.map((data, i) =>
                            <li key={i} className="single-product">

                                <div className="discount">{data.discount}</div>
                                <div className="img"></div>
                                <div className="inner">
                                    <h5>{data.name} N°{i + 2}</h5>
                                    <p>{data.price}</p>
                                    <button onClick={() => this.fRemove(i)} className="btn">Remove</button>
                                    <button onClick={() => this.fEdit(i)} className="btn">Edit</button>
                                </div>

                            </li>
                        )}

                    </ul>

                </div>
                <div className="footer"></div>


            </section>

        )
    }


}

export default Products;