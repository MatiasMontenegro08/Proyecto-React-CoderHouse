import React, { useEffect, useState } from 'react';
import './itemlistcontainer.css';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import obtenerProductos from '../../data/data.js';

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        obtenerProductos()
            .then((data) => {
                if (idCategoria) {
                    const productosFiltrados = data.filter((producto) => producto.categoria === idCategoria); //Tener cuidado con los tipos de datos, aveces tendremos que parsear.
                    setProductos(productosFiltrados) //Cargar los productos filtrados
                } else {
                    setProductos(data) //Cargar todos los productos
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Finalizo la promesa");
            });
    }, [idCategoria]);
    return (
        <main>
            <h1>{saludo}</h1>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer