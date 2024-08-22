import React from 'react'
import MetodosPago from './MetodosPago';
import banner from '/img/bannersuperior1.png'
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    //Hacer las secciones de productos destacados y tarjetas de categorías.
    return (
        <section className='home'>
            <div className='banner'>
                <Link to="/producto" ><img src={banner} alt="banner" /></Link>
            </div>
            <MetodosPago />
        </section>
    )
}

export default Home