import React from 'react';
import Products from './products/Products'
import NavMenu from './Layout/NavMenu'
import './styles/nav.css'
import './styles/products.css'


function products() {
    return (
        <>
            <NavMenu />
            <Products />
        </>
    )
}
export default products;