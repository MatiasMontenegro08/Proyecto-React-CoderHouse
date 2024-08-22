import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'
import ItemDetailInfo from './ItemDetailInfo'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ItemDetail = ({ producto }) => {

    const { agregarProducto } = useContext(CartContext);
    const [mostrarItemCount, setMostrarItemCount] = useState(true)

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador };
        agregarProducto(productoCarrito);
        toast.success("Producto agregado al carrito");
        //Ocultar el componente ItemCount
        setMostrarItemCount(false);
    }

    return (
        <section className='container-detail'>
            <div className='container-detail-img'>
                <img src={producto.img} alt={producto.titulo} />
                <div className='container-detail-img-galeria'>
                    <img src={producto.imgextra} alt={producto.titulo} />
                    <img src={producto.imgextra} alt={producto.titulo} />
                    <img src={producto.imgextra} alt={producto.titulo} />
                </div>
            </div>
            <div className='container-detail-body'>
                <ItemDetailInfo producto={producto} />
                {
                    //Renderizado condicional con una variable de estado.
                    mostrarItemCount ? (<ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />) : (<Link to="/cart" className='btn-ir-carrito'>Ir al carrito</Link>)
                }
            </div>
        </section>
    )
}

export default ItemDetail