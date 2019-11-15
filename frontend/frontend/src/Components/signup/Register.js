import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../../img/img.png";
import Form from './signupForm'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="root-container">
                <div className="img-container"> <img alt="any-img" src={img} /></div>
                <div className="login">
                    <div className="box-container">
                        {<Form />}
                    </div>
                    <div className="box-controller">
                        <NavLink exact to="/Login" className="controller">Login  </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;

