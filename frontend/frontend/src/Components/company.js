import React, { Component } from 'react';
import Company from './company/ChooseCompany'
import NavMenu from './Layout/NavMenu'
import './styles/nav.css'
import './styles/chooseCompany.css'


class company extends Component {
    render() {
        return (
            <>
                <NavMenu />
                <Company />
            </>
        )
    }

}
export default company;