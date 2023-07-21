"use client";
import React, { createContext, useState, useEffect } from "react";

// Create the CartContext with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);
type CartItem = {
  id: string;
  name: string;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
};

const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const initialCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(initialCartItems);
  }, []);

  const addToCart = (item: CartItem) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
