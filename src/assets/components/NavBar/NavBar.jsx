import React from 'react'
import ListaNavegacion from './ListaNavegacion'
import CartWidget from './CartWidget'
import './navbar.css'

const NavBar = () => {
    return (
        <nav>
            <ListaNavegacion/>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
