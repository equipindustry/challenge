import React from 'react';
import Home from './home/Home'
import NavHome from './Layout/NavHome'
import './styles/nav.css'
import './styles/home.css'

function home() {
    return (
        <>
            <NavHome />
            <Home />
        </>
    )
}
export default home;