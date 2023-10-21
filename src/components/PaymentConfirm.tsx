"use client";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartProvider";
import { saveItem } from "../lib/utils";

export default function PaymentConfirm() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("No Context");
  }
  const { cartItems, removeFromCart } = context;

  useEffect(() => {
    cartItems.forEach((value, index) => {
      saveItem(value);
      removeFromCart(index);
    });
  }, [cartItems, removeFromCart]);

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thank you for your purchase
        </p>

        <p className="mt-4 text-gray-500">
          An email has been sent confirming your purchase
        </p>

        <a
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
