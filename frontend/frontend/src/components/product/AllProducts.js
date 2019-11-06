import React, { Component } from 'react';
import axios from 'axios';
import CreateProduct from './CreateProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

export default class AllProducts extends Component{
    state = {
        products :[],
        sessionid : localStorage.getItem('sessionid'),
        companyid : '',
        name : ''
    }

        listProducts(prods) {
        let count = 0;
        for (let i=0; i<prods.length; i+=1) {
            console.log(prods[i].id);
            if(!prods[i].id){
                count++;
            }
        }
        return count;
      }


        componentDidMount(){
            const optionsuser = {
                url: 'http://localhost:3000/users/me',
                method: 'GET',
                headers: {
                  'Authorization': this.state.sessionid,
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              }
           axios(optionsuser).then(response => {
            this.setState({ companyid: response.data.companyId, name:response.data.name });
            console.log(this.state.companyid);
           });

            const options = {
                url: 'http://localhost:3000/products',
                method: 'GET',
                headers: {
                  'Authorization': this.state.sessionid,
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              }
           axios(options).then(response => {
              /*  this.state.company = response.data.find(element => {
                            if(element.id == this.state.companyid)
                            return element
                });

                if(this.state.company != null){
                    this.state.companies = new Object(this.state.company); 
                    console.log(this.state.companies);
                   // console.log('Numero'+this.state.countCompanies);
                }else{
                    this.state.companies =  Object.values(response.data);
                    console.log(this.state.companies);
                }*/
                this.setState({ products: response.data });
           });
           
        }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 espacioCompanies">
                        <h2>Bienvenido, {this.state.name}</h2>
                    </div>
                    <div className="col-12 espacioCompanies">
                        <h1>Lista de productos de la compañia</h1>
                    </div>
                    <div className="col-12 text-right espacioLinkCrear">
                        <CreateProduct/>
                    </div>
                    
                        { this.state.products.map(product => {
                            
                                return <div className="col-12 col-md-6 col-lg-6 col-xl-4 text-center espacioProducto" key={product.id}>
                                    <div className="card mb-4 box-shadow">
                                <div className="card-header">
                                    <h1 className="my-0 font-weight-normal">{product.name}</h1>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">{product.price} <small className="text-muted">PEN</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                    <li>Código: {product.sku}</li>
                                    <h6>Descuento: {product.discount} %</h6>
                                    </ul>
                                    
                                    <div className="row">
                                        <div className="col-6">
                                            <DeleteProduct productid={product.id} productname={product.name} />
                                        </div>
                                        <div className="col-6">
                                        <UpdateProduct productid={product.id} productname={product.name}  productsku={product.sku} price={product.price} discount={product.discount}/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        })}
                    
                </div>
            </div>
        );
    }
}