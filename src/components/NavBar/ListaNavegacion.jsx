import React from 'react'
import logoTienda from '../../assets/img/Logosublimarte.png'
import { Link } from 'react-router-dom';

const ListaNavegacion = () => {
    return (
        <div className='lista'>
            <Link to="/"><img src={logoTienda} alt="Logo sublimarte" /></Link>
            <ul>
                <Link to="/categoria/tazas">Tazas</Link>
                <Link to="/categoria/remeras">Remeras</Link>
                <Link to="/categoria/fotos">Fotos</Link>
            </ul>
        </div>
    )
}

export default ListaNavegacion