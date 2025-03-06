import React, { createContext, useContext } from "react";
import useLocalShoppingCart from "../hooks/useLocalShoppingCart";

const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
  const { cart, addToCart, removeFromCart, updateCartQuantity } = useLocalShoppingCart();
  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

export default ShoppingCartContext;