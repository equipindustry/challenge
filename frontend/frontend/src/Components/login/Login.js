import React from 'react';
import img from "../../img/img.png";
import { Redirect } from 'react-router-dom'



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true, isChangeOpen: false
        };
    }
    showLoginBox() {
        this.setState({ isLoginOpen: true, isChangeOpen: false })
    }
    showChangeBox() {
        this.setState({ isChangeOpen: true, isLoginOpen: false })
    }
    render() {
        return (
            <div className="root-container">
                <div className="img-container"> <img alt="any-img" src={img} /></div>
                <div className="login">

                    <div className="box-container">
                        {this.state.isLoginOpen && <LoginBox />}
                        {this.state.isChangeOpen && <ChangeBox />}
                    </div>
                    <div className="box-controller">
                        <div className={"controller " + (this.state.isLoginOpen ? "hide" : "")} onClick={this.showLoginBox.bind(this)}>
                            Login
                    </div>
                        <div className={"controller " + (this.state.isChangeOpen ? "hide" : "")} onClick={this.showChangeBox.bind(this)}>
                            Change Password
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

class LoginBox extends React.Component {
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


class ChangeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <div className="inner-container">
                <div className="box-header">

                    <h3>Change password</h3>
                </div>
                <div className="box-login">
                    <div className="input-group">
                        <label htmlFor="password">OLD PASSWORD</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" />


                    </div>


                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" />


                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD CONFIRMATION</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" />

                    </div>

                    <button type="button" className="login-btn btn">CHANGE NOW</button>
                </div>
            </div>
        )
    }


}

export default Login;