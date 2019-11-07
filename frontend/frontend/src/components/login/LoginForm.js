import React, { Component } from 'react';
import axios from 'axios';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

      axios.post(
        "http://localhost:3000/auth/login",
        {
          headers:{
            'Content-type':'application/json'
          },
            'email' : email,
            'password': password
        }
      )
      .then(response => {
        if (response.data) {
          localStorage.setItem('sessionid',response.data.sessionId);
          console.log(localStorage.getItem('sessionid'));
          console.log('redireccionando');
          window.location.href="/companies";
          
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container tamForm">
  <div className="col-md-6 mx-auto text-center ">
	 <div className="header-title">
		<h1>
		   Login
		</h1>
		<h2>
		  Access to the platform ....
		</h2>
	 </div>
  </div>
  <div className="row">
	 <div className="col-md-4 mx-auto">
		<div className="myform form ">
    <form onSubmit={this.handleSubmit} className="col-12 formStyle">
      <div className="form-group">
        <label htmlFor="InputEmail">Correo electrónico</label>
         <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control my-input"
          value={this.state.email}
          onChange={this.handleChange}
          required
          />
        <small id="emailHelp" className="form-text text-muted">Ingrese un correo válido</small>
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control my-input"
          value={this.state.password}
          onChange={this.handleChange}
          required
          />
          <small id="passwordHelp" className="form-text text-muted">No comparta su contraseña</small>
        </div>
        <button type="submit" className="btn  btn-success btn-block">Login</button>
    </form>
		</div>
	 </div>
  </div>
</div>
    );
  }
}

