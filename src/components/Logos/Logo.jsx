import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({ img, nombre }) => {
    return (
        <div>
            <Link to="/"><img src={img} alt={nombre} /></Link>
        </div>
    )
}

export default Logo