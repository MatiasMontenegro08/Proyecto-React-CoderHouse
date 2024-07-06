import React from 'react'
import logoTienda from '../../img/Logosublimarte.png'

const ListaNavegacion = () => {
    return (
        <div className='lista'>
            <img src={logoTienda} alt="Logo sublimarte" />
            <ul>
                <li><a href="#">Tazas</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Fotos</a></li>
            </ul>
        </div>
    )
}

export default ListaNavegacion