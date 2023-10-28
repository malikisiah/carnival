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
    <div className="pt-6">
      <div className="max-w-[73.5rem] w-auto h-auto w-full m-auto bg-white">
        <div className="tracking-tight flex items-center">
          <h1
            style={{ backgroundColor: theme }}
            className={`text-2xl border border-solid text-white w-48 flex items-center pl-3`}
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

          {/* STATE BUTTONS */}
          <div
            className={`pl-12 items-center border-b border-[${theme}] space-x-6 w-full`}
          >
            <button
              onClick={() => setCurrentPage(1)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 1 ? `border-black` : null
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 2 ? `border-black` : null
              }`}
            >
              Specials
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 3 ? `border-black` : null
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setCurrentPage(4)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 4 ? `border-black` : null
              }`}
            >
              Most Reviews
            </button>
            <button
              onClick={() => setCurrentPage(5)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 5 ? `border-black` : null
              }`}
            >
              On Sales
            </button>
            <button
              onClick={() => setCurrentPage(6)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 6 ? `border-black` : null
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setCurrentPage(7)}
              className={`bg-white hover:border-orange-500 hover:text-orange-500 px-[0.60rem] text-[13px] p-2 border ${
                currentPage === 7 ? `border-black` : null
              }`}
            >
              Recommendatation
            </button>
          </div>
        </div>
        </div>
        
        <div className="flex flex-row justify-center">
         {/* Category Buttons (vertical) */}
          <div className="flex flex-col pt-5">
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Store #1
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Store #2
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Accessories
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Manicure & Pedicure
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Bath & Spa
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Hair Care
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              Girl Sets
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[13px] p-2 text-left">
              ARM
            </button>
          </div>

         {/* Big Image (vertical) */}
          <div className="flex justify-center items-center">
            <img
              alt=""
              className="block h-full w-full object-cover object-center pt-6"
              src="/FloorProductsMarketPlace/bigHairMarketPlace.jpg" />
          </div>
  
        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item, idx) =>
          (
            <div key={idx} className="group relative">
              <div className="h-auto w-auto group border-2 border-solid border-gray-100 hover:border-orange-500 p-2 bg-white">
                <div className="relative overflow-hidden"> 
                  <div className="mt-2 flex justify-between pb-4">
                
               {/* NAME */}
                    <div>
                      <h3 className="text-sm">
                        <div className="text-[0.94rem] hover:text-orange-500 leading-none">
                          <span aria-hidden="true" />
                            {item.name}
                        </div>
                      </h3>
                    </div>

                {/* PRICE */}  
                <p className="font-bold text-[1.1rem] text-orange-500 leading-none">
                  {`$${item.price}`}
                </p>
                </div>
              
                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt=""
                  className="h-[16.625rem] w-[11.625rem] object-cover"
                  quality={100}
                  height={266}
                  width={186}
                />

              {/* Add to cart*/}
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
                  onClick={() =>
                    addToCart
                    ({
                      stripe_id: item.stripe_id,
                      name: item.name,
                      price: item.price,
                      qty: 1,
                      image: item.image,
                    })
                  }
                  className="text-white py-2 px-3"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
}