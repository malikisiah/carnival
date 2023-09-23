"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { CartContext } from "@/context/CartProvider";

type LatestDealsDetailsProps = {
  id: string;
  name: string;
  image: string;
  newPrice: number;
  oldPrice: number;
};

const LatestDealsDetails = ({
  id,
  name,
  image,
  newPrice,
  oldPrice,
}: LatestDealsDetailsProps) => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error");
  }

  const { addToCart } = context;
  return (
    <div className="group border-2 border-solid border-gray-100 hover:border-orange-500 p-2">
      <div className="relative overflow-hidden">
        {/* IMAGE */}
        <div className="h-full w-full object-cover">
          <a href="#">
            <Image src={image} alt="" width={208} height={258} />
          </a>

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
                addToCart({
                  stripe_id: id,
                  name: name,
                  price: newPrice,
                  qty: 1,
                  image: image,
                })
              }
              className="text-white py-2 px-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* NAME */}
      <div className="pt-3">
        <a
          href="#"
          className="text-[0.94rem] hover:text-orange-500 leading-none"
        >
          {name}
        </a>
      </div>

      <div className="flex">
        {/* NEW PRICE */}
        <div>
          <a
            href="#"
            className="font-bold text-[1.1rem] text-orange-500 leading-none"
          >
            ${newPrice}
          </a>
        </div>

        {/* OLD PRICE */}
        <div className="pl-4">
          <a href="#" className="text-[0.90rem] line-through leading-none">
            ${oldPrice}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestDealsDetails;
