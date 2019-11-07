import React, { Component } from 'react';
import LookUser from './LookUser';
import axios from 'axios';


export default class UserList extends Component{
        state = {
            sessionid : localStorage.getItem('sessionid'),
            companyid: '',
            name: '',
            userid :'',
            users:[]
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
            this.setState({ companyid: response.data.companyId, name:response.data.name, userid:response.data.id });
           });

           const options = {
            url: 'http://localhost:3000/users',
            method: 'GET',
            headers: {
              'Authorization': this.state.sessionid,
              'Content-Type': 'application/json;charset=UTF-8'
            }
           }
           axios(options).then(response => {
            this.setState({ users : response.data });
           });
        }
    render(){
        return (
            <div className="container">
                <div className="row">
                <div className="col-12">
                        <h3>Bienvenido, {this.state.name}</h3>
                    </div>
                    <div className="col-12">
                        <h1>Lista de Usuarios</h1>
                    </div>
                    <div className="col-12 text-center table-responsive">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Nombres</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    { // eslint-disable-next-line
                        this.state.users.map(user => {
                            const struct ='';
                           if(user.id !== this.state.userid){
                             this.struct =  <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><LookUser userid={user.id} username={user.name} usermail={user.email}/></td>
                            </tr> 
                            return struct;
                           }
                           
                    })}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}