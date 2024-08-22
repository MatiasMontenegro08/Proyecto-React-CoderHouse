import React from 'react'
import ListaNavegacion from './ListaNavegacion'
import CartWidget from './CartWidget'
import logoTienda from '/img/Logosublimarte.png'
import './navbar.css'
import Logo from '../Logos/Logo'

const NavBar = () => {
    return (
        <nav>
            <Logo img={logoTienda} nombre={"Logo sublimarte"} />
            <ListaNavegacion />
            <CartWidget />
        </nav>
    )
}

export default NavBar