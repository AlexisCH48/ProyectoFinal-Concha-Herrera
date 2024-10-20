import './CartWidget.css';
import CartIcon from '@/assets/ShoppingCart.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='cartWidget' style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
            <img src={CartIcon} alt="cart-widget" className='cartIcon' />
            <span className='cartQuantity'>{totalQuantity}</span>
        </Link>
    );
}

export default CartWidget;
