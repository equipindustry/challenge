import React from 'react';
import Company from './company/ChooseCompany'
import NavMenu from './Layout/NavMenu'
import './styles/nav.css'
import './styles/chooseCompany.css'

function company() {
    return (
        <>
            <NavMenu />
            <Company />
        </>
    )
}
export default company;