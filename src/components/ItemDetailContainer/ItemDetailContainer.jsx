import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import database from '../../database/database';
import { BeatLoader } from 'react-spinners';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [estaCargando, setEstaCargando] = useState(false);
    const { idProducto } = useParams();

    const getProducts = async () => {
        try {
            setEstaCargando(true);
            const docRef = doc(database, "productos", idProducto);
            const dataDb = await getDoc(docRef);
            const data = { id: dataDb.id, ...dataDb.data() }

            setProducto(data);
        } catch (error) {
            console.log(error);
        } finally {
            setEstaCargando(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <section>
            {estaCargando ? <BeatLoader color="magenta" /> : <ItemDetail producto={producto} />}
        </section>
    )
}

export default ItemDetailContainer