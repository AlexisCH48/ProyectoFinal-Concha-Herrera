import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <Card>
            <Card.Header>
                <Card.Title>{name}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Text>Categoría: {category}</Card.Text>
                <Card.Text>descripción: {description}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ' ,quantity)}/>
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail