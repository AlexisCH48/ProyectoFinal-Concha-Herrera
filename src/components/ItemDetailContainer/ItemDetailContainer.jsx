import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId);
    
    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(resp =>{
                const data = resp.data()
                const productAdapted = { id: resp.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [itemId]);

    return(
        <div>
            {product ? <ItemDetail {...product}/> : 
                <div className="loading">
                    <span className="loading-dots" data-dot="•">•</span>
                    <p className="loading-text">Cargando...</p>
                </div>}
        </div>
    )
}

export default ItemDetailContainer