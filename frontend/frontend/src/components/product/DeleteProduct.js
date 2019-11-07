import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';


export default class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        productid: props.productid,
        productname: props.productname,
        sessionid : localStorage.getItem('sessionid')
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle =()=> {
    this.setState({
        modal: !this.state.modal
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/products/'+this.state.productid,
        method: 'DELETE',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
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
        
        <Button className="btn btn-danger" onClick={this.toggle}>Eliminar</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader> <h2>¿Seguro que quiere eliminar ...?</h2> </ModalHeader>
          
          <ModalBody>
          <div className="row">
          <h1>{this.state.productname}</h1>
          </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Eliminar" color="primary" className="btn btn-success" />
            <Button className="btn btn-danger" onClick={this.toggle}>Cancelar</Button>
            
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
