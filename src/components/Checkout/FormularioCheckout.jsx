import React, { useState, useEffect } from 'react';
import './checkout.css';

const FormularioCheckout = ({ datosForm, handleSubmitForm, handleChangeInput }) => {
    const [emailValido, setEmailValido] = useState(false);

    useEffect(() => {
        // Comprobar si los emails coinciden
        if (datosForm.email === datosForm.validarEmail && datosForm.email !== "") {
            setEmailValido(true);
        } else {
            setEmailValido(false);
        }
    }, [datosForm.email, datosForm.validarEmail]); // Se ejecuta cada vez que los emails cambian

    return (
        <section>
            <h1>¡Datos para el pedido!</h1>
            <form className='checkout-formulario' onSubmit={handleSubmitForm}>
                <div className='input-form'>
                    <label>Nombre:</label>
                    <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChangeInput} />
                </div>
                <div className='input-form'>
                    <label>Teléfono:</label>
                    <input type="text" name='telefono' value={datosForm.telefono} onChange={handleChangeInput} />
                </div>
                <div className='input-form'>
                    <label>Email:</label>
                    <input type="email" name='email' value={datosForm.email} onChange={handleChangeInput} />
                </div>
                <div className='input-form'>
                    <label>Validar email:</label>
                    <input type="email" name='validarEmail' value={datosForm.validarEmail} onChange={handleChangeInput} />
                </div>
                {emailValido && (
                    <button className='btn-orden' type='submit'>Enviar orden</button>
                )}
            </form>
        </section>
    );
};

export default FormularioCheckout;