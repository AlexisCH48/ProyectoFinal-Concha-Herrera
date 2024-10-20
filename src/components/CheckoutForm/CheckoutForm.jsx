import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './CheckoutForm.css'; // Asegúrate de importar tu archivo CSS

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!name || !phone || !email) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        setError('');
        onConfirm({ name, phone, email });
    };

    return (
        <Form onSubmit={handleSubmit} className="checkoutForm">
            {error && <Alert variant="danger">{error}</Alert>}

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
