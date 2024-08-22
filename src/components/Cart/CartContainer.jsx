import Cart from './Cart'
import CartResumen from './CartResumen'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import './cartcontainer.css'
const CartContainer = () => {
    const { carrito, borrarProducto, vaciarCarrito, actualizarCantidad } = useContext(CartContext);
    return (
        <section className='cart-container'>
            <h1>Mi Carrito</h1>
            <div className='cart-container-body'>
                <Cart carrito={carrito} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} actualizarCantidad={actualizarCantidad} />
                <CartResumen />
            </div>
        </section>
    )
}

export default CartContainer