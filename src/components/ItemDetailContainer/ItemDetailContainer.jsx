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
        <div>
            {product ? <ItemDetail {...product}/> : 
                <div class="loading">
                    <span class="loading-dots" data-dot="•">•</span>
                    <p class="loading-text">Cargando...</p>
                </div>}
        </div>
    )
}

export default ItemDetailContainer