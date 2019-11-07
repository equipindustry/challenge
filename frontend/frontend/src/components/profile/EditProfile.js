import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';

export default class LookUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        sessionid: localStorage.getItem('sessionid'),
        username:'',
        usermail:'',
        userid:''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle =()=> {
    this.setState({
        modal: !this.state.modal
      });
  }

  handleChangeName(event) {
    this.setState({username: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({usermail: event.target.value});
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
    this.setState({ userid:response.data.id,username:response.data.name,usermail:response.data.email });
   });
  }
  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/users/me',
        method: 'PUT',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            'name':this.state.username,
            'email':this.state.usermail
        }
      }
    axios(options).then(response => {
        if(response){
            window.location.href="/profile";
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
        
        <Button className="btn btn-info" onClick={this.toggle}>Edit Profile</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>
            <h3>My Data</h3>
          </ModalHeader>
          <ModalBody>
            <div className="row">
             <div className="form-group col-md-8">
                <label>Nombres y Apellidos:</label>
                <input type="text" value={this.state.username} onChange={this.handleChangeName}  className="form-control"  required/>
             </div>
            </div>
            <div className="row">
             <div className="form-group col-md-8">
                <label>Email:</label>
                <input type="text" value={this.state.usermail} onChange={this.handleChangeEmail} className="form-control" required />
             </div>
            </div>
          </ModalBody>
          <ModalFooter>
          <input type="submit" value="Aceptar" color="primary" className="btn btn-success" />
            <Button className="btn btn-danger" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
