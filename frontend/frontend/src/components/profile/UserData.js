import React, { Component } from 'react';
import axios from 'axios';

export default class UserData extends Component{
    state ={
        userdata :[],
        sessionid : localStorage.getItem('sessionid'),
        company:[],
        companies:[]
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
        this.setState({ userdata: response.data });
       });

       const optioncompany = {
        url: 'http://localhost:3000/companies',
        method: 'GET',
        headers: {
          'Authorization': this.state.sessionid,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    axios(optioncompany).then(response => {
        this.setState({
            company : response.data.find(element => {
                if(element.id === this.state.userdata.companyId)
                var data = element
                return data
            })
        }); 
    });
    }
    render(){
        return(
            <div className="col-12">
                <div className="col-12">
                    <h2>My Data</h2>
                </div>
                <div className="col-12">
                    <p><span className="titData">Nombres</span>: {this.state.userdata.name}</p>
                    <p><span className="titData">Correo Electrónico</span>: {this.state.userdata.email}</p>
                    <p><span className="titData">Compañia a la que pertene  </span>: {this.state.company.name}</p>
                </div>
            </div>
            
        );
    }
}