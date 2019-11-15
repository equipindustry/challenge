import React, { Component } from 'react';
import Home from './home/Home'
import NavHome from './home/NavHome'
import './styles/nav.css'
import './styles/home.css'


class home extends Component {
    render() {
        return (
            <>
                <NavHome />
                <Home />
            </>
        )
    }

}
export default home;