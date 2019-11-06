import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Companies from './components/Companies';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import MyCompany from './components/MyCompany';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/companies' component={Companies} />
              <Route path='/products' component={Products} />
              <Route path='/signup' component={SignUp} />
              <Route path='/profile' component={Profile} />
              <Route path='/mycompany' component={MyCompany} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;