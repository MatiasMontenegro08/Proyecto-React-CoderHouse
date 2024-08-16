import React, { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import './buttons.css'

const ButtonCantidades = () => {
    const [cantidad, setCantidad] = useState(1)
    const stock = 10
    const aumentarCantidad = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <div className='btn-cantidades'>
            <button onClick={disminuirCantidad}>
                <GrSubtractCircle/>
            </button>
            <p>{cantidad}</p>
            <button onClick={aumentarCantidad} >
                <IoAddCircleOutline/>
            </button>
        </div>
    )
}

export default ButtonCantidades