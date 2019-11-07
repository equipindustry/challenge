import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLogin() {
    return (
        <header className="App-header login-header">
            <nav className="nav-login">
                <div className="bars">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="logo">
                    <NavLink exact to="/"><h1>XD</h1></NavLink>
                </div>
                <ul className="nav-menu">
                    <li><NavLink to="/Register" className="nav-menu__links" href="#"><i className="fa fa-user"></i></NavLink></li>
                </ul>
            </nav>
        </header>
    )

}

export default NavLogin;