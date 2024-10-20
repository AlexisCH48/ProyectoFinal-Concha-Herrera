import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { toast } from 'react-toastify';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
    
        const docRef = doc(db, 'products', itemId);
    
        getDoc(docRef)
            .then(resp => {
                const data = resp.data();
                const productAdapted = { id: resp.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                toast.error(error);
                setError("Ocurrió un error al cargar el producto.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);
    

    return (
        <>
            {error ? <p className="erroText">{error}</p> : 
                product ? <ItemDetail {...product} /> : 
                <div className="loading">
                    <span className="loadingDots" data-dot="•">•</span>
                    <p className="loadingText">Cargando...</p>
                </div>}
        </>
    );
    
}

export default ItemDetailContainer