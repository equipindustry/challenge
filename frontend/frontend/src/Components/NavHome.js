import React from 'react';
import { NavLink } from 'react-router-dom';


function NavHome() {
    return (
        <header className="App-header">
            <nav>
                <div className="logo">
                    <NavLink exact to="/"><h1>XD</h1></NavLink>
                </div>

                <ul className="nav-menu">
                    <li><NavLink exact to="/Products" className="nav-menu__links" >PRODUCTS</NavLink></li>
                    <li><NavLink exact to="/Companies" className="nav-menu__links" >COMPANIES</NavLink></li>

                    <li><NavLink exact to="/Login" className="nav-menu__links" >LOGIN</NavLink></li>
                    <li><NavLink to="/Register" className="nav-menu__links">REGISTER</NavLink></li>
                    <li><a className="nav-menu__links" href="#"><i className="fa fa-ellipsis-v"></i></a></li>
                </ul>
            </nav>
        </header>
    )

}

export default NavHome;