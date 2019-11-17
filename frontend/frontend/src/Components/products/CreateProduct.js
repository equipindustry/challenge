import React from 'react';

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            discount: ''
        }

    }
    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddProduct(this.state)
    }

    render() {
        return (
            <div className="CreateProduct" >
                <p>My company</p>
                <h2>Create product</h2>
                <form ref="myForm" className="myForm" onSubmit={this.handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="nameProduct">NAME PRODUCT</label>
                        <input onChange={this.handleInput} type="text" name="name" placeholder="Name Product" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sku">SKU</label>
                        <input onChange={this.handleInput} type="text" name="sku" placeholder="DP18-Bk-T" />
                    </div>
                    <div className="doble-input">
                        <div className="input-group">
                            <label htmlFor="price">PRICE</label>
                            <input onChange={this.handleInput} type="text" name="price" placeholder="Price" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="discount">DISCOUNT</label>
                            <input onChange={this.handleInput} type="text" name="discount" placeholder="Discount" />
                        </div>
                    </div>
                    <button className="btn btn-product" >CREATE NOW</button>
                </form>
            </div>
        )

    }
}

export default CreateProduct;