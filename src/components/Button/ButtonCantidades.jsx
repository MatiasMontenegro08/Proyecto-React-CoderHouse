import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import './buttons.css'

const ButtonCantidades = ({ productoCarrito, actualizarCantidad }) => {
    const [cantidad, setCantidad] = useState(productoCarrito.cantidad)

    useEffect(() => {
        setCantidad(productoCarrito.cantidad);
    }, [productoCarrito.cantidad]);

    return (
        <div className='container-btn-cantidades'>
            <div className='btn-cantidades'>
                <button onClick={() => setCantidad(actualizarCantidad(productoCarrito.id, 'disminuir'))}>
                    <GrSubtractCircle />
                </button>
                <p>{cantidad}</p>
                <button onClick={() => setCantidad(actualizarCantidad(productoCarrito.id, 'aumentar'))} >
                    <IoAddCircleOutline />
                </button>
            </div>
            <p>$ {productoCarrito.precio * cantidad}</p>
        </div>
    )
}

export default ButtonCantidades