import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout';
import database from '../../database/database';
import { Link } from 'react-router-dom';
import validateForm from '../../utils/validacionFormulario.js';
import imgPedidoConfirmado from '../../assets/img/pedidoconfirmado.svg';
import { toast } from 'react-toastify';
import './checkout.css';

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        validarEmail: ""
    });

    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        //formatear correctamente la información de la orden a subir.
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        };

        const response = await validateForm(datosForm);
        if (response.status === 'success') {
            sendOrder(orden);
        } else {
            toast.warning(response.message);
        }
    };

    const sendOrder = async (orden) => {
        try {
            const ordenesRef = collection(database, "ordenes");
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdOrden(ordenDb.id);
        } catch (error) {
            console.log(error);
        }
        finally {
            vaciarCarrito();
        }
    }

    return (
        <section className='container-checkout'>
            {
                idOrden ? (
                    <div className='container-orden'>
                        <div className='container-orden-img'>
                            <img src={imgPedidoConfirmado} alt="pedido confirmado" />
                        </div>
                        <div className='container-orden-body'>
                            <h2>Orden completada!</h2>
                            <p>Guarde el id de su orden generada</p>
                            <p className='idOrden'>{idOrden}</p>
                            <Link to="/home" className='btn-volver'>Volver inicio</Link>
                        </div>
                    </div>) : (<FormularioCheckout
                        datosForm={datosForm}
                        handleSubmitForm={handleSubmitForm}
                        handleChangeInput={handleChangeInput} />)
            }
        </section>
    )
}

export default Checkout