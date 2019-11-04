import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavMenu from './NavMenu';
import NavHome from './NavHome';
import NavLogin from './NavLogin'
import './nav.css';
import Home from "./Home";
import './home.css';
import ChooseCompany from './ChooseCompany';
import './chooseCompany.css';
import UpdateCompany from "./UpdateCompany";
import './updatecompany.css'
import Login from './Login';
import './login.css';
import Register from './Register'
import Products from './Products';
import './products.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={NavHome} />
        <Route exact path="/" component={Home} />
        <Route path="/Companies" component={NavMenu} />
        <Route exact path="/Companies" component={ChooseCompany} />
        <Route path="/Products" component={NavMenu} />
        <Route path="/Products" component={Products} />
        <Route exact path="/Login" component={NavLogin} />
        <Route exact path="/Register" component={NavLogin} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/updateinformacion" component={NavMenu} />
        <Route exact path="/updateinformacion" component={UpdateCompany} />

      </div>
    </BrowserRouter>
  );
}

export default App;
