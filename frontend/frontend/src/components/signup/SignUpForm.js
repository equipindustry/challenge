import React, { Component } from 'react';
import axios from 'axios';


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      passwordConfirmation : "",
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
    const {fullname, email, password, passwordConfirmation } = this.state;

      axios.post(
        "http://localhost:3000/auth/signup",
        {
          headers:{
            'Content-type':'application/json'
          },
            'name' : fullname,
            'email' : email,
            'password': password,
            'passwordConfirmation' : passwordConfirmation
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
		   Sign Up
		</h1>
		<h2>
		  Access to the platform and be part of our family ....
		</h2>
	 </div>
  </div>
  <div className="row">
	 <div className="col-md-4 mx-auto">
		<div className="myform form ">
    <form onSubmit={this.handleSubmit} className="col-12 formStyle">
    <div className="form-group">
        <label htmlFor="InputNombre">Nombre Completo</label>
         <input
          type="text"
          name="fullname"
          placeholder="Nombre Completo"
          className="form-control my-input"
          value={this.state.fullname}
          onChange={this.handleChange}
          required
          />
        <small id="nombreHelp" className="form-text text-muted">Ingrese su nombre completo</small>
      </div>
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
        <label htmlFor="InputPassword">Contraseña</label>
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
        <div className="form-group">
        <label htmlFor="InputRePassword">Reingrese Contraseña</label>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Ingrese nuevamente su contraseña"
          className="form-control my-input"
          value={this.state.passwordConfirmation}
          onChange={this.handleChange}
          required
          />
          <small id="passwordHelp" className="form-text text-muted">No comparta su contraseña</small>
        </div>
        <button type="submit" className="btn btn-success btn-block">SignUp</button>
    </form>
		</div>
	 </div>
  </div>
</div>
    );
  }
}

export default SignUpForm;
