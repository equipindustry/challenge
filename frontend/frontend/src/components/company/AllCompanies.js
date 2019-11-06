import React, { Component } from 'react';
import axios from 'axios';
import CreateCompany from './CreateCompany';
import LeaveCompany from './LeaveCompany';
import JoinCompany from './JoinCompany';
import UpdateCompany from './UpdateCompany';


export default class AllCompanies extends Component{
    state = {
        companies :[],
        mycompany :[],
        sessionid : localStorage.getItem('sessionid'),
        companyid : '',
        countCompanies : '',
        name : ''
    }

        listProducts(prods) {
        let count = 0;
        for (let i=0; i<prods.length; i+=1) {
            console.log(prods[i].id);
            if(!prods[i].id){
                count++;
            }
        }
        return count;
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
           axios(options).then(response => {
              /*  this.state.company = response.data.find(element => {
                            if(element.id == this.state.companyid)
                            return element
                });

                if(this.state.company != null){
                    this.state.companies = new Object(this.state.company); 
                    console.log(this.state.companies);
                   // console.log('Numero'+this.state.countCompanies);
                }else{
                    this.state.companies =  Object.values(response.data);
                    console.log(this.state.companies);
                }*/
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
                    <CreateCompany />
                    </div>
                    
                        { this.state.companies.map(company => {
                            if(this.state.companyid == company.id){
                                return <div className="col-12 col-md-6 col-lg-4 col-xl-4 text-center" key={company.id}>
                                <div className="card mb-4 box-shadow cardHeight">
                                <div className="card-header">
                                    <div className="col-12">
                                    <h1 className="my-0 font-weight-normal">{company.name}</h1>
                                    </div>
                                    <div className="row">
                                    <div className="col-6">
                                    <LeaveCompany companyid={company.id} companyname={company.name}/>
                                    </div>
                                    <div className="col-6">
                                    <UpdateCompany companyid={company.id} companyname={company.name} companyruc={company.ruc} />
                                    </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                    <h6>Nuestra Info</h6>
                                    <li>RUC: {company.ruc}</li>
                                    </ul>
                                    <a href={'/products'} className="btn btn-primary btn block">Nuestros Productos</a>
                                </div>
                                </div>
                            </div>
                            }else{
                                return <div className="col-12 col-md-6 col-lg-4 col-xl-4 text-center" key={company.id}>
                                <div className="card mb-4 box-shadow cardHeight">
                                <div className="card-header ">
                                   
                                    <div className="col-12">
                                    <h1 className="my-0 font-weight-normal">{company.name}</h1>
                                    </div>
                                    <div className="col-12">
                                    <JoinCompany companyid={company.id} companyname={company.name} />
                                    </div>
                                   
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                    <h6>Nuestra Info</h6>
                                    <li>RUC: {company.ruc}</li>
                                    </ul>
                                    
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