import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
import ImgError404 from '../../assets/img/error404.svg'

const PageNotFound = () => {
    return (
        <div className='container-error'>
            <h1>Página no encontrada!</h1>
            <img src={ImgError404} alt="Page not found" />
            <Link className='btn-volver' to="/">Volver al inicio.</Link>
        </div>
    )
}

export default PageNotFound