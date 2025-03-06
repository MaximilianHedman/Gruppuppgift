import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "shoppingCart";
const useLocalShoppingCart = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };
  const updateCartQuantity = (id, quantity) => {
    setCart((prevCart) => prevCart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };
  return { cart, addToCart, removeFromCart, updateCartQuantity };
};

export default useLocalShoppingCart;