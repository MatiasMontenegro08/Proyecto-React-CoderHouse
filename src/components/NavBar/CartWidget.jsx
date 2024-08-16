import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadTotal /*Recibimos las variables y funciones del contexto */ } = useContext(CartContext)

    let cantidad = cantidadTotal();
    return (
        <Link to="/cart" className='carrito'>
            <HiOutlineShoppingCart size={30} style={cantidad === 0 && {color: "rgba(112, 112, 112, 0.678)"}} />
            <p>{cantidad > 0 && cantidad}</p>
        </Link>
    )
}

export default CartWidget