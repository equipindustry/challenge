import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import UserList from './mycompany/UserList';

export default class MyCompany extends Component {
  render() {
    return (
        <div>
          <Header />
          <UserList />
          <Footer />
        </div>
    );
  }
}
