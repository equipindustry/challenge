import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

class Products extends Component {
  render() {
    let sessionActiva = localStorage.getItem('sessionid');
    if(!sessionActiva){
      window.location.href='/';
    }else{
      sessionActiva = 'No hay session';
    }
    return (
      <div className="Products">
        <Header/>
        <h1>sessionActiva</h1>
        <Footer />
      </div>
    );
  }
}

export default Products;