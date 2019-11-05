import React, { Component } from 'react';
import axios from 'axios';
import ModalComponent from './ModalComponent';
import JoinCompany from './JoinCompany';


export default class AllCompanies extends Component{
    state = {
        companies :[],
        sessionid : localStorage.getItem('sessionid'),
        companyid : '',
        name : ''
    }


        componentDidMount(){
            const optionsuser = {
                url: 'http://localhost:3000/users/me',
                method: 'GET',
                headers: {
                  'Authorization': this.state.sessionid,
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              }
           axios(optionsuser).then(response => {
            this.setState({ companyid: response.data.companyId, name:response.data.name });
           });

            const options = {
                url: 'http://localhost:3000/companies',
                method: 'GET',
                headers: {
                  'Authorization': this.state.sessionid,
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              }
             console.log(this.state.sessionid);
             console.log(options.headers);
           axios(options).then(response => {
            this.setState({ companies: response.data });
           });
        }

    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 espacioCompanies">
                        <h2>Bienvenido, {this.state.name}</h2>
                    </div>
                    <div className="col-12 espacioCompanies">
                        <h1>Lista de compañias activas</h1>
                    </div>
                    <div className="col-12 text-right espacioLinkCrear">
                    <ModalComponent />
                    </div>
                    
                        { this.state.companies.map(company => {
                            if(company.id === this.state.companyid){
                                return <div className="col-12 col-md-6 col-lg-6 col-xl-6" key={company.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-9 col-md-8 col-lg-8 col-xl-8">
                                                <h2>{company.name}</h2>
                                            </div>
                                            <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                                <JoinCompany companyid={company.id} />
                                            </div>
                                        </div>
                                        <p className="card-text">Nuestra Info => Ruc {company.ruc}</p>
                                        <a href={'/company/'+company.id} className="btn btn-primary">Nuestros Productos</a>
                                    </div>
                                </div>
                            </div>
                            }else{
                                return <div className="col-12 col-md-6 col-lg-6 col-xl-6" key={company.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{company.name}</h5>
                                        <p className="card-text">Nuestra Info => Ruc {company.ruc}</p>
                                        <a href={'/company/'+company.id} className="btn btn-primary">Nuestros Productos</a>
                                    </div>
                                </div>
                            </div>
                            }
                        })}
                    
                </div>
            </div>
        );
    }
}