
// const CartItem = ({ id, name, price, quantity, removeFromCart }) => {
//     return (
//         <div className='cart-item'>
//             <span>{name}</span>
//             <span>${price}</span>
//             <div className='quantity-control'>
//                 <span>{quantity}</span>
//                 <button onClick={() => removeFromCart(id)}>Eliminar</button>
//             </div>
//         </div>
//     );
// }


import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <Card className='mb-3'>
            <Card.Body>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Precio: ${price}</Card.Text>
                        <Card.Text>Cantidad: {quantity}</Card.Text>
                    </Col>
                    <Col md={6} className='text-end'>
                        <Button variant='danger' onClick={() => removeItem(id)}>Eliminar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CartItem;
