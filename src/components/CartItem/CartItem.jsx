import React from 'react';

const CartItem = ({ id, name, price, quantity, removeFromCart }) => {
    return (
        <div className='cart-item'>
            <span>{name}</span>
            <span>${price}</span>
            <div className='quantity-control'>
                <span>{quantity}</span>
                <button onClick={() => removeFromCart(id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default CartItem;
