import React from 'react'
import dbPreguntas from '../../database/dataPreguntasFrecuentes.json'
import './preguntas.css'

const PreguntasFrecuentes = () => {

    return (
        <section className='container-preguntas-frecuentes'>
            <h1>Preguntas frecuentes</h1>
            {dbPreguntas.preguntasFrecuentes.map((item, index) => (
                <div key={index} className='card-preguntas'>
                    <h3>{item.pregunta}</h3>
                    <p>{item.respuesta}</p>
                </div>
            ))}
        </section>
    );
}

export default PreguntasFrecuentes