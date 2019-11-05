import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import LoginForm from  './LoginForm';

class Login extends Component {
  render() {
    return (
        <div>
          <Header />
          <LoginForm />
          <Footer />
        </div>
    );
  }
}

export default Login;