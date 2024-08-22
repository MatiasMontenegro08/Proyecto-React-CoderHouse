import React from 'react'
import { Link } from 'react-router-dom';

const ListaNavegacion = () => {
    return (
        <div className='lista'>
            <ul>
                <Link to="/home">Inicio</Link>
                <Link to="/producto">Productos</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/preguntas">Preguntas frecuentes</Link>
            </ul>
        </div>
    )
}

export default ListaNavegacion