import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';


export default class UpdateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        companyname: props.companyname,
        companyruc : props.companyruc ,
        companyid : props.companyid ,
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
      console.log(this.state.companyname);
  }
  handleChangeName(event) {
    this.setState({companyname: event.target.value});
  }
  handleChangeRUC(event) {
    this.setState({companyruc: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/companies/'+this.state.companyid,
        method: 'PUT',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            'name':this.state.companyname,
            'ruc':this.state.companyruc
        }
      }
    console.log('Session Token:' + this.state.sessionid);
    axios(options).then(response => {
        if(response){
            window.location.href="/companies";
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
            <input type="text" value={this.state.companyname} onChange={this.handleChangeName} className="form-control"  required/>
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-8">
            <label>RUC:</label>
                <input type="text" value={this.state.companyruc} onChange={this.handleChangeRUC} className="form-control" required />
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
