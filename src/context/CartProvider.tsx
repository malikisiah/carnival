"use client";
import React, { createContext, useState, useEffect } from "react";

// Create the CartContext with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    const initialCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(initialCartItems);
  }, []);

  const addToCart = (item: ShopItem) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
