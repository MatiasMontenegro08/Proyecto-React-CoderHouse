import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";

const CartWidget = () => {
    return (
        <div className='carrito'>
            <HiOutlineShoppingCart size={30} />
            <p>1</p>
        </div>
    )
}

export default CartWidget
