import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class LoginBox extends Component {
    constructor(props) {
        super(props);
        // let loggedIn = true

        // if (token == null) {
        //     loggedIn = false
        // }

        let loggedIn = false;

        this.state = {
            email: '',
            password: '',
            loggedIn
        };
        this.onChange = this.onChange.bind(this)
        this.submitFom = this.submitFom.bind(this)

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitFom(e) {
        e.preventDefault()
        const { email, password } = this.state
        if (email === 'elliot@evilcorp.com' && password === 'mypassword') {

            localStorage.setItem("token", "asdf1gf56a4gdfh6uy4im")
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/Companies' />
        }

        return (
            <div className="inner-container">
                <div className="box-header">
                    <p>Access to platform</p>
                    <h3>Login</h3>
                </div>
                <form onSubmit={this.submitFom} className="box-login">
                    <div className="input-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" autoComplete='password' name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.onChange} />

                    </div>

                    <input type="submit" value="TO ACCESS" className="login-btn btn" />
                </form>
            </div>
        )
    }
}
export default LoginBox;
