import './ItemCount.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(quantity);
        toast.success(`${quantity} items added to cart!`);
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div className='addButton'>
                <button className='ButtonCart' onClick={handleAddToCart} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;
