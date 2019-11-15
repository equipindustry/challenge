import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./Components/home";
import login from "./Components/login";
import signup from './Components/signup';
import company from './Components/company';
import products from './Components/products';
import profile from './Components/profile';
import './Components/styles/reset.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/Login" component={login} />
          <Route path="/Sign-up" component={signup} />
          <Route path="/Companies" component={company} />
          <Route path="/Products" component={products} />
          <Route path="/Profile" component={profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
