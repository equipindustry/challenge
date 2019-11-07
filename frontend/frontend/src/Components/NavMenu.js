import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMenu() {
    return (
        <header className="App-header">
            <nav>
                <div className="logo">
                    <NavLink exact to="/"><h1>XD</h1></NavLink>
                </div>
                <div className="search-bar">
                    <input type="search" placeholder="Search product" />
                    <i className="fa fa-search"></i>
                </div>
                <ul className="nav-menu">
                    <li><NavLink to="Products" className="nav-menu__links" href="#">PRODUCTS</NavLink></li>
                    <li><NavLink exact to="/Companies" className="nav-menu__links" >COMPANIES</NavLink></li>
                    <li><NavLink to="/UpdateProfile" className="nav-menu__links" href="#">USER_NAME</NavLink></li>
                    <li><a className="nav-menu__links" href="#"><i className="fa fa-user"></i></a></li>
                </ul>
            </nav>
        </header>
    )

}

export default NavMenu;


