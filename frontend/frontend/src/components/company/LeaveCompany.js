import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';


export default class LeaveCompany extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        name: '',
        companyid : props.companyid ,
        companyname: props.companyname,
        sessionid : localStorage.getItem('sessionid')
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeRUC = this.handleChangeRUC.bind(this);
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
  handleChangeRUC(event) {
    this.setState({ruc: event.target.value});
  }

    


  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/companies/leave',
        method: 'POST',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    console.log('Session Token:' + this.state.sessionid);
    axios(options).then(response => {
        if(response){
            window.location.href="/companies";
        }
    }).catch(err => {
        if(err.response.status === 400){
            console.log("You're already in an company");
            this.setState({
                modal: !this.state.modal
              });
        }
    });
}

  render() {
    return (

        <div>
        <Button className="btn btn-danger" onClick={this.toggle}>Salir</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>¿Desea salir de esta compañia?</ModalHeader>
          <ModalBody>
          <div className="row">
                <h1>{this.state.companyname}</h1>
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
