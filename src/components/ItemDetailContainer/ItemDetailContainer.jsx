import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    console.log(itemId);
    

    useEffect(() => {
        getProductById(Number(itemId))
            .then(response => {
                console.log(response);
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return(
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product}/> : <div>Cargando...</div>}
        </div>
    )
}

export default ItemDetailContainer