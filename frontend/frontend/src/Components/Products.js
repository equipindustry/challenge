import React from 'react';
import Products from './products/Products'
import NavMenu from './Layout/NavMenu'
import Footer from './Layout/footer'
import './styles/nav.css'
import './styles/products.css'


function products() {
    return (
        <>
            <NavMenu />
            <Products />
            <Footer />
        </>
    )
}
export default products;