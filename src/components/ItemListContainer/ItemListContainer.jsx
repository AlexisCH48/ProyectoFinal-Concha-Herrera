import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    console.log("Categoría ID:", categoryId);

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        console.log("Referencia de colección:", collectionRef);

        getDocs(collectionRef)
            .then(resp => {
                console.log("Respuesta de Firestore:", resp);
                const productsAdapted = resp.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                console.log("Productos adaptados:", productsAdapted);
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.error("Error obteniendo los productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    console.log("Estado de productos:", products);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
