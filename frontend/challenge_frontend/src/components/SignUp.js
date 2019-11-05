import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  render() {
    return (
        <div>
          <Header />
          <SignUpForm />
          <Footer />
        </div>
    );
  }
}

export default SignUp;