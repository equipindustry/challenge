import React, { Component } from 'react';
import Logo from '../../assets/images/imagotipo.svg';
import '../styles/Header.css';
import axios from 'axios';


//eslint-disable-next-line
class Header extends Component {
    

    render() {
        let local = localStorage.getItem('sessionid');
        let desaparecer = {
            display:'default'
        };
        let aparecer = {
            display:'none'
        };
        if(local){
            aparecer.display = 'default';
            desaparecer.display = 'none';
        }

        let removeStorage = () => {
            axios.delete("http://localhost:3000/auth/logout",{
             headers: {
                 'Authorization' : localStorage.getItem('sessionid'),
                'Content-type': 'application/json'
             }
            })
            .then(response => {
                if (response) {
                    localStorage.clear();
                    console.log(localStorage.getItem('sessionid'));
                    window.location.href="/";
                }
              })
              .catch(error => {
                console.log("logout error", error);
              });
            
        }

        return(
            <header id="changeHeader" className="header-color col-12 np">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-6 col-md-7 col-lg-6 np">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 text-left">
                                
                                <img src={Logo} className="tamLogo" alt="Logo"/>
                            </div>
                            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-9 ">
                                <nav className="nav">
                                    <li>
                                        <a href="/companies" className="nav-link">Companies</a>
                                    </li>
                                    <li>
                                        <a href="/products" className="nav-link">Products</a>
                                    </li>
                                    <li style={desaparecer}>
                                        <a href="/"  className="nav-link">Login</a>
                                    </li>
                                    <li style={desaparecer}>
                                        <a href="/signup" className="nav-link">Registro</a>
                                    </li>
                                    
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-5 col-lg-6 text-right">
                            <nav style={aparecer} className="nav">
                                    <li>
                                        <a href="/profile"  className="nav-link">Profile</a>
                                    </li>
                                    <li>
                                        <a href="/mycompany" className="nav-link">Mi Compañia</a>
                                    </li>
                                    <li>
                                        <button onClick={removeStorage} className="btn btn-danger">Cerrar Sessión</button>
                                    </li>
                                    
                                </nav>
                        <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none col-md-12 np">
                            <button className="bte2c" id="btn2">
                                    <span className="change1" id="lin1" ></span>
                                    <span className="change2"  id="lin2" ></span>
                                    <span className="change3" id="lin3" ></span>
                                    <span className="change4" id="lin4" ></span>
                                    <span className="change6" id="lin6"></span>
                            </button>
                        </div>
                    </div>
        
                </div>
            </div>
            <div id="subheader"  className="d-block d-sm-block d-md-block d-lg-none d-xl-none col-md-12">
                <ul className="subnav-mobile">
                <li>
                    <a href="/companies" className="nav-link">Companies</a>
                </li>
                <li>
                <a href="/products" className="nav-link">Products</a>
                </li>
                <li>
                    <a href="/" className="nav-link">Login</a>
                </li>
                <li>
                    <a href="/signup" className="nav-link">Registro</a>
                </li>

                </ul>
            </div>
        </header>

        )
    }
}


export default Header;