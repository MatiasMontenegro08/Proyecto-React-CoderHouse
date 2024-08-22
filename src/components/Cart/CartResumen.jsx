import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './cartcontainer.css'

const CartResumen = () => {
    const { carrito, precioTotal } = useContext(CartContext);

    return (
        <aside className='container-resumen'>
            <div className='cart-resumen'>
                <h2>Resumen de compra</h2>
                <p>Productos</p>
                <p className='text-precio'>$ {precioTotal()}</p>
                <p>Envío</p>
                <p className='text-precio'>$ -</p>
                <h3>Total:</h3>
                <p className='text-precio'>Total carrito: $ {precioTotal()}</p>
            </div>
            {carrito.length > 0 && <Link to="/checkout" className='btn-compra'>Continuar con el pago</Link>}
        </aside>
    )
}

export default CartResumen