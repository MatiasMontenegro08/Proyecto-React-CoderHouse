import Cart from './Cart'
import CartResumen from './CartResumen'
import './cartcontainer.css'
const CartContainer = () => {

    return (
        <section className='cart-container'>
            <h2>Mi Carrito</h2>
            <div className='cart-container-body'>
                <Cart />
                <CartResumen/>
            </div>
        </section>
    )
}

export default CartContainer