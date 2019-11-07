import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import axios from 'axios';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        sessionid: localStorage.getItem('sessionid'),
        oldpassword:'',
        newpassword:'',
        renewpassword:''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleChangeConfirmationNewPassword = this.handleChangeConfirmationNewPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle =()=> {
    this.setState({
        modal: !this.state.modal
      });
  }

  handleChangePassword(event) {
    this.setState({oldpassword: event.target.value});
  }
  handleChangeNewPassword(event) {
    this.setState({newpassword: event.target.value});
  }
  handleChangeConfirmationNewPassword(event) {
    this.setState({renewpassword: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const options = {
        url: 'http://localhost:3000/users/me/change_password',
        method: 'PUT',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            'oldPassword':this.state.oldpassword,
            'newPassword':this.state.newpassword,
            'newPasswordConfirmation':this.state.renewpassword
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
        
        <Button className="btn btn-warning" onClick={this.toggle}>Change Password</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>
            <h3>My Data</h3>
          </ModalHeader>
          <ModalBody>
            <div className="row">
             <div className="form-group col-md-8">
                <label>Old Password:</label>
                <input type="password" value={this.state.oldpassword} onChange={this.handleChangePassword}  className="form-control"  required/>
             </div>
            </div>
            <div className="row">
             <div className="form-group col-md-8">
                <label>New Password:</label>
                <input type="password" value={this.state.newpassword} onChange={this.handleChangeNewPassword} className="form-control" required />
             </div>
            </div>
            <div className="row">
             <div className="form-group col-md-8">
                <label>Password Confirmation:</label>
                <input type="password" value={this.state.renewpassword} onChange={this.handleChangeConfirmationNewPassword} className="form-control" required />
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
