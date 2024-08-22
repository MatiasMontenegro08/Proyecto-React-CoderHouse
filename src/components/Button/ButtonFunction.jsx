import React from 'react'

const ButtonFunction = ({ funcion, parametro, texto }) => {
    return (
        <button onClick={() => funcion(parametro)}>
            {texto}
        </button>
    )
}

export default ButtonFunction