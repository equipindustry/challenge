import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UpdateCompany from './UpdateCompany'
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
            companies,
            isCompaniesOpen: true, isUpdateOpen: false
        }
        this.addCompany = this.addCompany.bind(this)
    }
    showCompaniesBox() {
        this.setState({ isCompaniesOpen: true, isUpdateOpen: false })
    }
    showUpdateBox() {
        this.setState({ isUpdateOpen: true, isCompaniesOpen: false })
    }
    addCompany(company) {
        this.setState({
            companies: [...this.state.companies, company]
        })
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        const companies = this.state.companies.map((company, i) => {
            return (
                <article key={i} className="card">
                    <img alt="any-img" src={img} />
                    <div className="inner">
                        <h3>{company.title}</h3>
                        <p>{company.description}</p>

                        <Link to="/Products" className="btn btn-card">Choose Company</Link>
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
                        <button className={"btn " + (this.state.isUpdateOpen ? "hide" : "")} onClick={this.showUpdateBox.bind(this)}>CREATE NEW COMPANY</button>
                        <button className={"btn " + (this.state.isCompaniesOpen ? "hide" : "")} onClick={this.showCompaniesBox.bind(this)} >SEE COMPANIES</button>
                    </div>
                </section>

                <div className="div">
                    {this.state.isCompaniesOpen && <div className="container">
                        {companies}
                    </div>}

                    {this.state.isUpdateOpen && <UpdateCompany onAddCompany={this.addCompany} />}
                </div>
            </div>


        )
    }


}

export default ChooseCompany;