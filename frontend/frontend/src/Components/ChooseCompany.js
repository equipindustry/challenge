import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { companies } from './companies.json';
import img from "../img/img.png";



class ChooseCompany extends Component {
    constructor() {
        super();
        const token = localStorage.getItem("token")
        let loggedIn = true

        if (token == null) {
            loggedIn = false
        }
        this.state = {
            companies
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        const companies = this.state.companies.map((company, i) => {
            return (
                <article className="card">
                    <img src={img} />
                    <div className="inner">
                        <h3>{company.title}</h3>
                        <p>{company.description}</p>

                        <NavLink exact to="/Products" className="btn btn-card">Choose Company</NavLink>
                    </div>
                </article >

            )
        })

        return (
            <div className="App2" >
                <section className="company" >
                    <div className="col-left">
                        <div className="inner" >
                            <h2>Welcome new user!</h2>
                            <p>choose the company you belong to</p>
                        </div>
                    </div>
                    <div className="col-right col-company">
                        <NavLink exact to="/updateinformacion" className="btn">CREATE NEW COMPANY</NavLink>
                    </div>
                </section>

                <div className="container">
                    {companies}
                </div>
            </div>


        )
    }


}

export default ChooseCompany;