import { createContex, useState } from "react";

export const CartContext = createContex({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] =  useState([])
    
    console.log(cart);
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === ItemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}