import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig';
import { toast } from "react-toastify";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        getDocs(collectionRef)
            .then(resp => {
                const productsAdapted = resp.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                toast.error("Error obteniendo los productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
