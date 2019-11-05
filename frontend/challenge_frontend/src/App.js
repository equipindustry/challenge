import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Companies from './components/Companies';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CompanyDetails from './components/CompanyDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/companies' component={Companies} />
              <Route path='/companies/:id' component={CompanyDetails} />
              <Route path='/products' component={Products} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;