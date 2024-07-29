import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import obtenerProductos from '../../data/data.js';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { idProducto } = useParams();

    useEffect( () => {
        obtenerProductos()
            .then((data) => {
                const productoEncontrado = data.find((productoData) => productoData.id === idProducto)
                setProducto(productoEncontrado)
            })
    }, [] );
    return (
        <main>
            <ItemDetail producto={producto}/>
        </main>
    )
}

export default ItemDetailContainer
