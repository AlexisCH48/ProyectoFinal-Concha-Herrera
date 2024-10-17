import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const quantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
        setTotalQuantity(quantity);
    }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            setCart(prev => prev.map(prod => prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod));
        }
    };

    const removeItem = (itemId) => {
        console.log(`Eliminando producto con id: ${itemId}`); // Añade esto para depurar
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
