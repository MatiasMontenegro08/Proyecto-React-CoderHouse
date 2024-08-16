import React from 'react'

const ItemDetailInfo = ({producto}) => {
    return (
        <div className='container-detail-body-info'>
            <h2>{producto.titulo}</h2>
            <h3>${producto.precio}</h3>
            <p>{producto.descripcion}</p>
        </div>
    )
}

export default ItemDetailInfo
