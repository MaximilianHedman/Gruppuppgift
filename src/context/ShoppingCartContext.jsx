//lägg in funktionerna för shopping cart +
//funktionen för product details som kommunicerar med varukorgen

import React, { createContext, useContext } from "react";
import useLocalShoppingCart from "../hooks/useLocalShoppingCart"; // Custom Hook for Local Storage

const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
    const { cart, addToCart, removeFromCart, updateCartQuantity } = useLocalShoppingCart(); // Include update function
    return (
        <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

export default ShoppingCartContext;