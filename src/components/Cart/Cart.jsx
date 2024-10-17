import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <Container>
                <h1>No hay productos en el carrito</h1>
            </Container>
        );
    }

    return (
        <Container>
            <h1>Carrito de Compras</h1>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${total}</h3>
            <Button variant='danger' onClick={clearCart}>Vaciar Carrito</Button>
            <Link to='/checkout'>
                <Button variant='success' className='mt-3'>Proceder al Checkout</Button>
            </Link>
        </Container>
    );
}

export default Cart;
