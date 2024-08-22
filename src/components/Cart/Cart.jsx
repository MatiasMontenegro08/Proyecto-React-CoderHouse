import ButtonCantidades from '../Button/ButtonCantidades';
import { Link } from 'react-router-dom';

const Cart = ({ carrito, borrarProducto, vaciarCarrito, actualizarCantidad }) => {
    //retorno temprano
    if (carrito.length === 0) {
        return (
            <div className='carrito-vacio'>
                <h2>El carrito esta vacio...</h2>
                <Link to="/producto" className='btn-ver-productos'> Ver productos </Link>
            </div>
        )
    }
    return (
        <div className='micarrito'>
            <ul className='lista-carrito'>
                {
                    carrito.map((productoCarrito) => (
                        <li className='producto-carrito'>
                            <div className='producto-carrito-img'>
                                <img src={productoCarrito.img} alt={productoCarrito.titulo} />
                            </div>
                            <div className='producto-carrito-detalle'>
                                <div className='detalle-body'>
                                    <p>{productoCarrito.titulo}</p>
                                    <button className='btn-borrar' onClick={() => borrarProducto(productoCarrito.id)}>Borrar</button>
                                </div>
                            </div>
                            <ButtonCantidades productoCarrito={productoCarrito} actualizarCantidad={actualizarCantidad} />
                        </li>
                    ))
                }
            </ul>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Cart