import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="inner-container">
                <div className="box-header">
                    <p>Access to platform</p>
                    <h3>Register</h3>
                </div>
                <form onSubmit={this.handleSubmit} className="box-login">
                    <div className="input-group">
                        <label htmlFor="name">NAME</label>
                        <input type="text" name="name" className="login-input" placeholder="Name" onChange={this.handleChange} />

                    </div>
                    <div className="input-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" onChange={this.handleChange} />

                    </div>

                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" autoComplete='password' name="password" className="login-input" placeholder="Password" onChange={this.handleChange} />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD CONFIRMATION</label>
                        <input type="password" autoComplete='password' name="password-confirmation" className="login-input" placeholder="Confirm password" onChange={this.handleChange} />

                    </div>
                    <button className="login-btn btn">Register</button>
                </form>
            </div>
        )
    }


}
export default Form;

