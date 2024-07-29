import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'

const ItemDetail = ( { producto } ) => {

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador}
        console.log(productoCarrito)
    }

    return (
        <div className='container-detail'>
            <img src={producto.img} alt={producto.titulo} />
            <div className='container-detail-body'>
                <h2>{producto.titulo}</h2>
                <h3>${producto.precio}</h3>
                <p>{producto.descripcion}</p>
                <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />        
            </div>
        </div>
    )
}

export default ItemDetail