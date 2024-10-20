import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const quantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
        setTotalQuantity(quantity);

        const totalPrice = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
        setTotal(totalPrice);
    }, [cart]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find(prod => prod.id === item.id);
        const availableStock = item.stock;

        if (!existingItem) {
            if (quantity <= availableStock) {
                setCart(prev => [...prev, { ...item, quantity,}]);
            } else {
                console.error('Cantidad solicitada excede el stock disponible');
            }
        } else {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity <= availableStock) {
                setCart(prev => prev.map(prod => prod.id === item.id ? { ...prod, quantity: newQuantity } : prod));
            } else {
                console.error('Cantidad solicitada excede el stock disponible');
            }
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const incrementQuantity = (itemId) => {
        setCart(prev => prev.map(prod => {
            if (prod.id === itemId && prod.quantity < prod.stock) {
                return { ...prod, quantity: prod.quantity + 1 };
            }
            return prod;
        }));
    };

    const decrementQuantity = (itemId) => {
        setCart(prev => prev.map(prod => {
            if (prod.id === itemId && prod.quantity > 1) {
                return { ...prod, quantity: prod.quantity - 1 };
            }
            return prod;
        }));
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, incrementQuantity, decrementQuantity, clearCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
