import React from 'react'
import ItemListContainer from '../../components/Main/ItemListContainer'
import ListaCategoria from './ListaCategoria'
import './productos.css'

const Productos = () => {
    return (
        <section className='productos'>
            <h1>Productos</h1>
            <ListaCategoria />
            <ItemListContainer />
        </section >
    )
}

export default Productos