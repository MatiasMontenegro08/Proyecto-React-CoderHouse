import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className='card'>
            <img src={producto.img} alt={producto.titulo} />
            <h3>{producto.titulo}</h3>
            <Link to={"/detalle/" + producto.id}>Ver detalle</Link>
        </div>
    )
}

export default Item