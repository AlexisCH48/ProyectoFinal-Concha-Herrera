import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return (
        <Card>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;
