import React from 'react';
import Register from './signup/Register'
import NavLogin from './Layout/NavLogin'
import './styles/nav.css'
import './styles/login.css'

function Signup() {
    return (
        <>
            <NavLogin />
            <Register />
        </>
    )
}
export default Signup;