import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onConfirm({ name, phone, email });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Confirmar
            </Button>
        </Form>
    );
};

export default CheckoutForm;
