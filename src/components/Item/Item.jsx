import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return (
        <Card className='Card'>
            <Card.Img className='CardImg' variant="top" src={img} alt={name} />
            <Card.Body className='CardBody'>
                <Card.Title className='CardTitle'>{name}</Card.Title>
                <div className='CardTextContainer'>
                    <Card.Text className='CardPrice'>Precio: ${price}</Card.Text>
                    <Card.Text className='CardStock'>Stock: {stock}</Card.Text>
                </div>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;
