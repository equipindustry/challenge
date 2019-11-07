import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import AllCompanies from './company/AllCompanies';

class Companies extends Component {
  
  render() {
    var sessionActiva = localStorage.getItem('sessionid');
    if(!sessionActiva){
      window.location.href='/';
    }
    return (
        <div>
          <Header />
          <h1>{sessionActiva}</h1>
          <AllCompanies />
          <Footer />
        </div>
    );
  }
} 

export default Companies;