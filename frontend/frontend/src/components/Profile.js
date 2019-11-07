import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import UserData from './profile/UserData';
import EditProfile from './profile/EditProfile';
import ChangePassword from './profile/ChangePassword';

export default class Profile extends Component {
  render() {
    return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <UserData />
              </div>
              <div className="col-12 col-md-6">
                <div className="col-12">
                  <EditProfile />
                </div>
                <div className="col-12">
                  <ChangePassword />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}
