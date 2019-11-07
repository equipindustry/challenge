import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import AllProducts from './product/AllProducts';
import axios from 'axios';

export default class Products extends Component {
  state = {
    companyid :'',
    sessionid : localStorage.getItem('sessionid')
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
    this.setState({ companyid: response.data.companyId, name:response.data.name });
    
  });
}

  render() {
    if(!this.state.sessionid){
      window.location.href='/';
    }else{
      if(this.state.companyid){
        return (
          <div className="Products">
            <Header/>
            <h1>{this.state.sessionid}</h1>
            <AllProducts />
            <Footer />
          </div>
        );
      }else{
        return (
          <div className="Products">
            <Header/>
            <h1>Únete a una compañia primero</h1>
            <Footer />
          </div>
        );
      }
    }
    
}
}
