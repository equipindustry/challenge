import React, { Component } from 'react';
import Profile from './profile/UpdateProfile'
import './styles/nav.css'
import './styles/home.css'
import NavMenu from './Layout/NavMenu';


class profile extends Component {
    render() {
        return (
            <>
                <NavMenu />
                <Profile />
            </>
        )
    }

}
export default profile;