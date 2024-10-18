import { useContext, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { db } from "../../Firebase/firebaseConfig";
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, Timestamp, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    const [orderId, setOrderdId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext);
    const navigate = useNavigate(); 


    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => { 
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) { 
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderdId(orderAdded.id);
                clearCart();
            } else {
                console.error('¡Productos fuera de stock!');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); 
        }
    };

    if (loading) {
        return <h1>Se está generando su orden</h1>;
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
            <Button variant='secondary' className='mt-3' onClick={() => navigate(-1)}>Volver Atrás</Button>
        </div>
    );
};

export default Checkout;
