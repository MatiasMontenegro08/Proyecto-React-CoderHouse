import React from 'react'

const CardPerfil = ({ img, texto }) => {
    return (
        <div className='card-perfil'>
            <div className='card-perfil-img'>
                <img src={img} alt="" />
            </div>
            <p>{texto}</p>
        </div>
    )
}

export default CardPerfil