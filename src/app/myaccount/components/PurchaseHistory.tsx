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
      <div className="">
        <h1 className="text-center font-bold text-2xl pb-8">My Orders</h1>
        <div className="grid grid-cols-1 gap-16 w-1/3 mx-auto">
          {orderHistory
            ? orderHistory.map((value, index) => {
                return (
                  <ProductCard
                    key={index}
                    image={value.image}
                    price={value.price}
                    name={value.name}
                    purchaseDate={value.purchaseDate}
                    stripe_id={value.stripe_id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
