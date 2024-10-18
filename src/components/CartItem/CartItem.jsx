import React, { useContext } from 'react';
import { Card, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, price, quantity, stock }) => {
    const { removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);

    return (
        <Card className='mb-3'>
            <Card.Body>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Precio: ${price}</Card.Text>
                        <div className="quantity-control">
                            <InputGroup>
                                <Button variant="outline-secondary" onClick={() => decrementQuantity(id)}>-</Button>
                                <FormControl value={quantity} readOnly />
                                <Button variant="outline-secondary" onClick={() => incrementQuantity(id)}>+</Button>
                            </InputGroup>
                        </div>
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
