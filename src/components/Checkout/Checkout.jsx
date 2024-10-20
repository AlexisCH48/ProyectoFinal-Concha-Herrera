import './Checkout.css';
import { useContext, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { db } from "../../Firebase/firebaseConfig";
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where, documentId, writeBatch, Timestamp, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Checkout = () => {
    const [orderId, setOrderdId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: { name, phone, email },
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
                toast.error('¡Productos fuera de stock!');
            }
        } catch (error) {
            toast.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden</h1>;
    }

    if (orderId) {
        return (
            <div className="checkoutSuccess">
                <h1>El id de su orden es: {orderId}</h1>
                <Button className='backButton' onClick={() =>  navigate('/')}>
                    Volver al Inicio
                </Button>
            </div>
        );
    }

    return (
        <div className="checkoutContainer">
            <h1 className="checkoutTitle">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} className="checkoutForm" />
            <Button className='backButton' onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Volver
            </Button>
        </div>
    );
};

export default Checkout;
