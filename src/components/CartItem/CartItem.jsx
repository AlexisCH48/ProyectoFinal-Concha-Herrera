import React, { useContext } from 'react';
import { Card, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, stock }) => {
    const { removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(id);
        toast.error(`${name} eliminado del carrito`, {
            position: "top-center",
        });
    };

    return (
        <Card className='mb-3' id='cartItem'>
            <Row className='g-0 w-100 align-items-center'>
                <Col md={12}>
                    <Card.Body className='cartItemGrid'>
                        <div className='cartItemDetails'>
                            <Card.Title className="cartItemHeader">{name}</Card.Title>
                            <div className='cartItemMiddleContainer'>
                                <Card.Text className="cartItemMiddle">Precio: ${price}</Card.Text>
                                <Card.Text className="cartItemMiddle">Cantidad a comprar: {quantity}</Card.Text>
                                <Card.Text className="cartItemMiddle">Stock: {stock}</Card.Text>
                            </div>
                        </div>
                        <div className="quantityControl">
                            <InputGroup className='quantityControlDetail'>
                                <Button variant="outline-secondary" onClick={() => decrementQuantity(id)}>-</Button>
                                <FormControl className='quantityControl' value={quantity} readOnly />
                                <Button variant="outline-secondary" onClick={() => incrementQuantity(id)}>+</Button>
                            </InputGroup>
                        </div>
                        <div className='cartItemButton'>
                            <Button variant='danger' onClick={handleRemoveItem}>Eliminar</Button>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItem;
