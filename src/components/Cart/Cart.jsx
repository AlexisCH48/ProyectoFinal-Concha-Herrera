import './Cart.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <Container className="cartContainer">
                <h1 className='titleCartEmpty'>No hay productos en el carrito</h1>
                <Button className='backButton' onClick={() => navigate('/')}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Volver al Inicio
                    </Button>
            </Container>
        );
    }

    return (
        <Container className="cartContainer">
            <h1 className='titleCart'>Carrito de Compras</h1>
            <div className="buttonContainer">
                <div className="buttonGroup-left">
                    <Button className='backButton' onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Volver
                    </Button>
                    <Button onClick={clearCart} id="clearButton">Vaciar Carrito</Button>
                </div>
                <div className="buttonGroup-right">
                    <h3 className='total'>Total: ${total}</h3>
                    <Link to='/checkout'>
                        <Button className='checkoutButton'>Proceder al Checkout</Button>
                    </Link>
                </div>
            </div>
            <div className={`cartContent ${cart.length === 1 ? 'singleItem' : ''}`}>
                {cart.map((item) => (
                    <div key={item.id}>
                        <CartItem {...item} />
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Cart;
