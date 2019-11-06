import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';


export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        productname: props.productname,
        productsku : props.productsku ,
        productid : props.productid ,
        price : props.price,
        discount: props.discount,
        sessionid : localStorage.getItem('sessionid')
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSKU = this.handleChangeSKU.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeDiscount = this.handleChangeDiscount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle =()=> {
    this.setState({
        modal: !this.state.modal
      });
      console.log(this.state.productname);
  }
  handleChangeName(event) {
    this.setState({productname: event.target.value});
  }
  handleChangeSKU(event) {
    this.setState({productsku: event.target.value});
  }
  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }
  handleChangeDiscount(event) {
    this.setState({discount: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/products/'+this.state.productid,
        method: 'PUT',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            'name':this.state.productname,
            'sku':this.state.productsku,
            'price':this.state.price,
            'discount':this.state.discount
        }
      }
    axios(options).then(response => {
        if(response){
            window.location.href="/products";
        }
    }).catch(err => {
        if(err.response){
            console.log(err.response);
            this.setState({
                modal: !this.state.modal
              });
        }
    });
}

  render() {
    return (

        <div>
        
        <Button className="btn btn-info" onClick={this.toggle}>Editar</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>
            <h3>Edite la compañia a la que pertenece</h3>
          </ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-8">
            <label>Name:</label>
            <input type="text" value={this.state.productname} onChange={this.handleChangeName} className="form-control"  required/>
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-8">
            <label>Sku (Code):</label>
                <input type="text" value={this.state.productsku} onChange={this.handleChangeSKU} className="form-control" required />
               </div>
              </div>
              <div className="row">
             <div className="form-group col-md-8">
            <label>Price:</label>
                <input type="text" value={this.state.price} onChange={this.handleChangePrice} className="form-control" required />
               </div>
              </div>
              <div className="row">
             <div className="form-group col-md-8">
            <label>Discount: (Optional)</label>
                <input type="text" value={this.state.discount} onChange={this.handleChangeDiscount} className="form-control" />
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Aceptar" color="primary" className="btn btn-success" />
            <Button className="btn btn-danger" onClick={this.toggle}>Cancelar</Button>
            
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
