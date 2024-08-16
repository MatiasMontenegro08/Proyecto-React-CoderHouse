import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ButtonFunction from '../Button/ButtonFunction'
import './cartcontainer.css'

const CartResumen = () => {
    const {precioTotal} = useContext(CartContext);
    return (
        <aside className='cart-resumen'>
            <h2>Resumen de compra</h2>
            <p>Productos</p>
            <p className='text-precio'>$</p>
            <p>Envío</p>
            <p className='text-precio'>$</p>
            <h3>Total:</h3>
            {/* <p className='text-precio'>Total carrito: $ {precioTotal()}</p> */}
            {/* <ButtonFunction comprar={Comprar}/> */}
        </aside>
    )
}

export default CartResumen