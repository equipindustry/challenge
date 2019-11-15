import React, { Component } from 'react';
import Register from './signup/Register'
import NavLogin from './login/NavLogin'
import './styles/nav.css'
import './styles/login.css'


class Signup extends Component {
    render() {
        return (
            <>
                <NavLogin />
                <Register />
            </>
        )
    }

}
export default Signup;