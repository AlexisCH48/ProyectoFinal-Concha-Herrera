import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <Card className='CardDetail'>
            <Card.Body className='CardBody'>
                <Row>
                    <Col md={4} className='d-flex justify-content-center' >
                        <Card.Img className='CardImgDetail' src={img} alt={name} />
                    </Col>
                    <Col md={8} className='d-flex justify-content-center'>
                        <Card.Body className='CardBodyText'>
                            <Stack gap={3}>
                                <div className="p-2">
                                    <Card.Title className='CardTitleDetail'>{name}</Card.Title>
                                </div>
                                <div className="p-2">
                                    <Card.Text className='CardCategory'>Categoría: {category}</Card.Text>
                                </div>
                                <div className="p-2">
                                    <Card.Text className='CardDescription'>Descripción: {description}</Card.Text>
                                </div>
                                <div className="p-2">
                                    <Card.Text className='CardPriceDetail'>Precio: ${price}</Card.Text>
                                </div>
                                <div className="p-2">
                                    <ItemCount className='CardItemCount' initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
                                </div>
                            </Stack>
                        </Card.Body>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ItemDetail