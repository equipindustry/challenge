import React from 'react';



class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            act: 0,
            index: '',
            datas: []
        }
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
    render() {
        return (
            <div className="CreateProduct" >
                <p>My company</p>
                <h2>Create product</h2>
                <form ref="myForm" className="myForm" >
                    <div className="input-group">
                        <label htmlFor="nameProduct">NAME PRODUCT</label>
                        <input type="text" ref="name" placeholder="Name Product" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sku">SKU</label>
                        <input type="text" placeholder="DP18-Bk-T" />
                    </div>
                    <div className="doble-input">
                        <div className="input-group">
                            <label htmlFor="price">PRICE</label>
                            <input type="text" ref="price" placeholder="Price " />
                        </div>
                        <div className="input-group">
                            <label htmlFor="discount">DISCOUNT</label>
                            <input type="text" ref="discount" placeholder="Discount " />
                        </div>
                    </div>

                    <button onClick={this.fSubmit} className="btn btn-product" >CREATE NOW</button>
                </form>
            </div>
        )

    }
}

export default CreateProduct;