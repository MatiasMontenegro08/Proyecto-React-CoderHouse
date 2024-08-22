import React from 'react'
import './nosotros.css'
import CardPerfil from './CardPerfil'
import perfil1 from '/img/soriperfil.svg'
import perfil2 from '/img/matiperfil.svg'
import dataNosotros from '../../database/dataNosotros.json'

const Nosotros = () => {
    return (
        <section className='nosotros'>
            <h1>SUBLIMARTE</h1>
            <div className='nosotros-info'>
                <p>{dataNosotros.historia}</p>
            </div>
            <div className='nosotros-card-perfil'>
                <CardPerfil img={perfil1} texto={dataNosotros.soraya} />
                <CardPerfil img={perfil2} texto={dataNosotros.matias} />
            </div>
        </section >
    )
}

export default Nosotros