import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';


export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        name: '',
        sku :'' ,
        price: '',
        discount: '',
        companyid: '',
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
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeSKU(event) {
    this.setState({sku: event.target.value});
  }
  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }
  handleChangeDiscount(event) {
    this.setState({discount: event.target.value});
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
    this.setState({ companyid: response.data.companyId});
    console.log(this.state.companyid);
   });
  }

  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/products',
        method: 'POST',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            'companyId':this.state.companyid,
            'name':this.state.name,
            'sku':this.state.sku,
            'price':this.state.price,
            'discount':this.state.discount
        }
      }
    console.log('Session Token:' + this.state.sessionid);
    axios(options).then(response => {
        if(response){
            window.location.href="/products";
        }
    }).catch(err => {
        if(err.response.status === 400){
            console.log("Ya se creo uno igual");
            this.setState({
                modal: !this.state.modal
              });
        }
    });
}

  render() {
    return (

        <div>
        
        <Button className="btn btn-warning" onClick={this.toggle}>Crear Nueva Producto</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader> <h2>Registre un nuevo producto</h2> </ModalHeader>
          
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-8">
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" required/>
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-8">
            <label>SKU (Código):</label>
                <input type="text" value={this.state.sku} onChange={this.handleChangeSKU} className="form-control" required/>
               </div>
              </div>
              <div className="row">
             <div className="form-group col-md-8">
            <label>Price:</label>
                <input type="text" value={this.state.price} onChange={this.handleChangePrice} className="form-control" required/>
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
            <input type="submit" value="Crear" color="primary" className="btn btn-success" />
            <Button className="btn btn-danger" onClick={this.toggle}>Cancelar</Button>
            
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
