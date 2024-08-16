import React, { useEffect, useState } from 'react';
import './itemlistcontainer.css';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import obtenerProductos from '../../data/data.js';
import { BeatLoader } from 'react-spinners';

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);
    const { idCategoria } = useParams();

    useEffect(() => {
        //Primero mostrar pantalla de carga.
        setEstaCargando(true);

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
                setEstaCargando(false);
            });
    }, [idCategoria]);
    return (
        <main>
            <h1>{saludo}</h1>
            { estaCargando ? <BeatLoader color="magenta" /> : <ItemList productos={productos} />}
        </main>
    )
}

export default ItemListContainer