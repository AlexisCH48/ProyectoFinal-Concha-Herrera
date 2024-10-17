import CartIcon from '@/assets/ShoppingCart.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    console.log("Cantidad total en el carrito: ", totalQuantity); // Añade esto para depurar

    return (
        <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img src={CartIcon} alt="cart-widget" />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget;
