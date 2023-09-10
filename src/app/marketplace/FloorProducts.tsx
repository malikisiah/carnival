"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { CartContext } from "@/context/CartProvider";
export default function FloorProducts({
  items,
  header,
  theme,
}: FloorProductsProps) {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error");
  }

  const { addToCart } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const displayedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#eaeaea]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
        <div className="tracking-tight flex items-center">
          <h1
            style={{ backgroundColor: theme }}
            className={`text-2xl font-semibold border border-solid text-white w-48 flex items-center`}
          >
            {" "}
            {header}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </h1>
          {/* State buttons go here */}
          <div
            className={`pl-12 items-center border-b border-[${theme}] space-x-6 w-full`}
          >
            <button
              onClick={() => setCurrentPage(1)}
              className={`hover:opacity-50 border ${
                currentPage === 1 ? `border-black` : null
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`hover:opacity-50 border ${
                currentPage === 2 ? `border-black` : null
              }`}
            >
              Specials
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`hover:opacity-50 border ${
                currentPage === 3 ? `border-black` : null
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setCurrentPage(4)}
              className={`hover:opacity-50 border ${
                currentPage === 4 ? `border-black` : null
              }`}
            >
              Most Reviews
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {displayedItems.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="mt-4 flex justify-between pb-6">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="" className="font-bold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-[#f97316]">
                  {`$${item.price} USD`}
                </p>
              </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 transition lg:h-80 border border-gray-300">
                <Image
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  quality={100}
                  height={500}
                  width={500}
                />
              </div>
              <div
                className="absolute h-1/5 w-full bg-black/70 flex items-center justify-center 
                -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 hover:bg-orange-500 hover:opacity-100"
              >
                {/*Cart icon */}
                <svg
                  className="color: white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    fill="white"
                  ></path>
                </svg>

                <button
                  className="text-white py-2 px-3"
                  onClick={() =>
                    addToCart({
                      stripe_id: item.stripe_id,
                      name: item.name,
                      price: item.price,
                      qty: 1,
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
