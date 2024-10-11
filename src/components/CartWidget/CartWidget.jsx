import CartIcon from '@/assets/ShoppingCart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' style={{display: totalQuantity > 0 ? 'block': 'none'}}>
            <img src={CartIcon} alt="cart-widget"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget