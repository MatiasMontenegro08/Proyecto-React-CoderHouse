import React, { useEffect, useState } from 'react';
import './itemlistcontainer.css';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { BeatLoader } from 'react-spinners';
import { getDocs, collection, query, where } from 'firebase/firestore';
import database from '../../database/database.js';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);
    const { idCategoria } = useParams();

    const getProducts = async () => {
        try {
            setEstaCargando(true);
            const productosRef = collection(database, "productos")
            const dataDb = await getDocs(productosRef);
            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })

            setProductos(data);
        } catch (error) {
            console.log(error)
        } finally {
            setEstaCargando(false);
        }

    }

    const getProductsByCategory = async () => {
        try {
            setEstaCargando(true);
            const productosRef = collection(database, "productos");
            const consulta = query(productosRef, where("categoria", '==', idCategoria));
            const dataDb = await getDocs(consulta);

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            });

            setProductos(data);
        } catch (error) {
            console.log(error)
        } finally {
            setEstaCargando(false);
        }
    }

    useEffect(() => {
        if (idCategoria) {
            getProductsByCategory()
        } else {
            getProducts();
        }
    }, [idCategoria]);
    return (
        <div>
            {estaCargando ? <BeatLoader color="magenta" /> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer