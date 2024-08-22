import React from 'react'
import { Link } from 'react-router-dom';

const ListaCategoria = () => {
    return (
        <div className='categoria-lista'>
            <ul>
                <Link to="/categoria/tazas">Tazas</Link>
                <Link to="/categoria/remeras">Remeras</Link>
                <Link to="/categoria/fotos">Fotos</Link>
                <Link to="/producto">Todos</Link>
            </ul>
        </div>
    )
}

export default ListaCategoria