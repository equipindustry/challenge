import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./Components/Home";
import login from "./Components/Login";
import signup from './Components/Signup';
import company from './Components/Company';
import products from './Components/Products';
import profile from './Components/Profile';
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
