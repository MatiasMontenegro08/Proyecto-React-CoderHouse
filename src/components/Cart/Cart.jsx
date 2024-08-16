import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ButtonCantidades from '../Button/ButtonCantidades';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { carrito, borrarProducto, vaciarCarrito } = useContext(CartContext);

    //retorno temprano
    if (carrito.length === 0){
        return(
            <div>
                <h2>El carrito esta vacio...</h2>
                {/* Diseñar un componente para cuando el carrito este vacio, agregar un boton que permita volver al home o productos */}
                <Link to="/"> Inicio </Link>
            </div>
        )
    }
    return (
        <div className='micarrito'>
            <ul className='lista-carrito'>
                {
                    carrito.map( (productoCarrito) => (
                        <li className='producto-carrito'>
                            <div className='producto-carrito-img'>
                                <img src={productoCarrito.img} alt={productoCarrito.titulo} />
                            </div>
                            <div className='producto-carrito-detalle'>
                                <div className='detalle-body'>
                                    <p>{productoCarrito.titulo}</p>
                                    <button onClick={ () => borrarProducto(productoCarrito.id) }>Borrar</button>
                                </div>
                            </div>
                            <ButtonCantidades/>
                            <p>$ {productoCarrito.precio * productoCarrito.cantidad}</p>
                        </li>
                    ))
                }
            </ul>
            <button onClick={ vaciarCarrito }>Vaciar carrito</button>
        </div>
    )
}

export default Cart
