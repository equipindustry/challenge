import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';

export default class LookUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        modal: false,
        username: props.username,
        usermail : props.usermail ,
        userid : props.userid ,
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle =()=> {
    this.setState({
        modal: !this.state.modal
      });
  }


  render() {
    return (

        <div>
        
        <Button className="btn btn-info" onClick={this.toggle}>Ver Info</Button>
        <Modal show={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>
            <h3>Datos del Usuario</h3>
          </ModalHeader>
          <ModalBody>
            <div className="row">
             <div className="form-group col-md-8">
                <label>ID del User:</label>
                <input type="text" value={this.state.userid} className="form-control" disabled />
               </div>
            </div>
            <div className="row">
             <div className="form-group col-md-8">
                <label>Nombres y Apellidos:</label>
                <input type="text" value={this.state.username}  className="form-control"  disabled/>
             </div>
            </div>
            <div className="row">
             <div className="form-group col-md-8">
                <label>Email:</label>
                <input type="text" value={this.state.usermail} className="form-control" disabled />
             </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-danger" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
