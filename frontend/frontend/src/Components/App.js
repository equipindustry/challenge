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
import CreateProduct from './CreateProduct'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={NavHome} />
        <Route exact path="/" component={Home} />
        <Route path="/Companies" component={NavMenu} />
        <Route path="/Companies" component={ChooseCompany} />
        <Route path="/Products" component={NavMenu} />
        <Route path="/Products" component={Products} />
        <Route path="/Login" component={NavLogin} />
        <Route path="/Register" component={NavLogin} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/updateinformacion" component={NavMenu} />
        <Route path="/updateinformacion" component={UpdateCompany} />
        <Route path="/CreateProduct" component={NavMenu} />
        <Route exact path="/CreateProduct" component={CreateProduct} />



      </div>
    </BrowserRouter>
  );
}

export default App;
