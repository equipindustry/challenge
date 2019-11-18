import React from 'react';
import Profile from './profile/UpdateProfile'
import './styles/nav.css'
import './styles/home.css'
import NavMenu from './Layout/NavMenu';

function profile() {
    return (
        <>
            <NavMenu />
            <Profile />
        </>
    )
}
export default profile;