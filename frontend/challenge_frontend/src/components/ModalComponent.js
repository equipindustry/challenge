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
        modal: false,name: '',
        ruc :'' ,
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
        url: 'http://localhost:3000/companies/create_join',
        method: 'POST',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            'name':this.state.name,
            'ruc':this.state.ruc
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
        
        <Button className="btn btn-warning" onClick={this.toggle}>Crear Nueva Compañia</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Registre una Nueva Compañia</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-8">
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-8">
            <label>RUC:</label>
                <input type="text" value={this.state.ruc} onChange={this.handleChangeRUC} className="form-control" />
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancelar</Button>
            
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
