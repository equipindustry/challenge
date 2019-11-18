import React from 'react';
import Login from './login/Login'
import NavLogin from './Layout/NavLogin'
import './styles/nav.css'
import './styles/login.css'

function login() {
    return (
        <>
            <NavLogin />
            <Login />
        </>
    )
}
export default login;