import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <Container>
                <h1>No hay productos en el carrito</h1>
                <Button variant='primary' onClick={() => navigate(-1)}>Volver Atrás</Button>
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
            <Button variant='secondary' className='mt-3' onClick={() => navigate(-1)}>Volver Atrás</Button>
        </Container>
    );
}

export default Cart;
