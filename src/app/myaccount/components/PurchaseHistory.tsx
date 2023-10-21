"use client";
import { getPurchaseHistory } from "@/lib/utils";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
export default function PurchaseHistory() {
  const [orderHistory, setOrderHistory] = useState<ShopItem[]>([]);
  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchData = async () => {
      try {
        const historyData = await getPurchaseHistory();
        // Only update state if the component is still mounted
        if (isMounted) {
          setOrderHistory(historyData);
        }
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, []); // No dependency array, to avoid causing infinite loops

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
        {orderHistory.map((value, index) => {
          return (
            <ProductCard
              key={index}
              image={value.image}
              price={value.price}
              name={value.name}
            />
          );
        })}
      </div>
    </>
  );
}
