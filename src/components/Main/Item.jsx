import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={producto.img} alt={producto.titulo} />
            </div>
            <div className='card-body'>
                <h3>{producto.titulo}</h3>
                <Link to={"/detalle/" + producto.id}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item