import React from 'react'
import ListaNavegacion from '../NavBar/ListaNavegacion'
import logoTienda from '../../assets/img/Logosublimarte.png'
import Logo from '../Logos/Logo'
import Redes from './Redes'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <Logo img={logoTienda} nombre={"Logo Sublimarte"} />
            <ListaNavegacion />
            <Redes />
        </footer>
    )
}

export default Footer