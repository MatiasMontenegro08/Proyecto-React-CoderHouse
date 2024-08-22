import React from 'react'
import { Link } from 'react-router-dom';
import { SlSocialInstagram } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import './footer.css'


const Redes = () => {
    return (
        <div className='redes'>
            <Link to="https://www.instagram.com/sublimarte.ms/?hl=es-la" target='_blank'><SlSocialInstagram size={30} style={{ color: "magenta" }} /></Link>
            <Link to="https://www.facebook.com/subli.marte.3538" target='_blank'><BsFacebook size={30} style={{ color: "magenta" }} /></Link>
            <Link to="https://wa.me/message/TUJQJOZMYYCZG1" target='_blank'><ImWhatsapp size={30} style={{ color: "magenta" }} /></Link>
            <Link to="https://www.tiktok.com/@sublimartereconquista?_t=8kmck8khHBF&_r=1" target='_blank'><FaTiktok size={30} style={{ color: "magenta" }} /></Link>
        </div>
    )
}

export default Redes