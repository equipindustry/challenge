import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../img/img.png";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="root-container">
                <div className="img-container"> <img src={img} /></div>
                <div className="login">

                    <div className="box-container">
                        {<RegisterBox />}
                    </div>
                    <div className="box-controller">


                        <NavLink exact to="/Login" className="controller">Login  </NavLink>

                    </div>
                </div>
            </div>
        )
    }
}

class RegisterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", email: "", password: "", errors: []
        };
    }
    showValidationErr(elem, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elem, msg }] }))
    }
    clearValidationErr(elem) {
        this.setState((prevState) => {
            let newArr = []
            for (let err of prevState.errors) {
                if (elem !== err.elem) {
                    newArr.push(err)
                }
            }
            return { errors: newArr }
        })
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value })
        this.clearValidationErr('username')
    }
    onEmailChange(e) {
        this.setState({ email: e.target.value })
        this.clearValidationErr('email')
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value })
        this.clearValidationErr('password')
    }
    submitRegister(e) {
        if (this.state.username === "") {
            this.showValidationErr('username', 'Username cannot be empty')
        } if (this.state.email === "") {
            this.showValidationErr('email', 'Email cannot be empty')
        } if (this.state.password == "") {
            this.showValidationErr('password', 'Password cannot be empty')
        }

    }

    render() {

        let usernameErr = null, passwordErr = null, emailErr = null;
        for (let err of this.state.errors) {
            if (err.elem === 'username') {
                usernameErr = err.msg
            } if (err.elem === 'password') {
                passwordErr = err.msg
            } if (err.elem === 'email') {
                emailErr = err.msg
            }

        }

        return (
            <div className="inner-container">
                <div className="box-header">
                    <p>Access to platform</p>
                    <h3>Register</h3>
                </div>
                <div className="box-login">
                    <div className="input-group">
                        <label htmlFor="username">NAME</label>
                        <input type="text" name="username" className="login-input" placeholder="Name" onChange={this.onUsernameChange.bind(this)} />
                        <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" onChange={this.onEmailChange.bind(this)} />
                        <small className="danger-error">{emailErr ? emailErr : ""}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange.bind(this)} />
                        <small className="danger-error">{passwordErr ? passwordErr : ""}</small>

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD CONFIRMATION</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange.bind(this)} />
                        <small className="danger-error">{passwordErr ? passwordErr : ""}</small>

                    </div>

                    <button type="button" className="login-btn btn" onClick={this.submitRegister.bind(this)}>Register</button>
                </div>
            </div>
        )
    }


}

export default Register;