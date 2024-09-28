import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <Card>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Button variant="primary">Ver detalles</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
