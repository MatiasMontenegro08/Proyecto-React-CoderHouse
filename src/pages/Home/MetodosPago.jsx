import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import './home.css'

const MetodosPago = () => {
    return (
        <div className='metodos-pago'>
            <div className='icon-metodo'>
                <FaTruckFast size={60} />
                <p>Envío a todo el país</p>
            </div>
            <div className='icon-metodo'>
                <FaCreditCard size={60} />
                <p>Todos los medios de pago</p>
            </div>
            <div className='icon-metodo'>
                <IoIosLock size={60} />
                <p>Compra segura</p>
            </div>
        </div>
    )
}

export default MetodosPago