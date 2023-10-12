"use client";
import Link from "next/link";
import Image from "next/image";
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";
import { useContext } from "react";
import { CartContext } from "@/context/CartProvider";

export default function NavBar() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Error");
  }

  const { cartItems } = context;

  return (
    <>
      <NavHeader />
      <div className="navbar bg-white  h-28 justify-center sticky top-0 z-40 border-b-2 border-gray-200">
        <div className="mr-8">
          <Image width={225} height={225} alt="" src="/nomadlogotop.jpg" />
        </div>
        <div className="mr-12">
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal "
            href="/"
          >
            {" "}
            Home
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/mascamps"
          >
            {" "}
            Mas Camps
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/CGgear" //this is the link to the CG Gear page
          >
            {" "}
            CG Gear
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/marketplace"
          >
            {" "}
            Marketplace
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/models"
          >
            {" "}
            Models
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/artistes"
          >
            {" "}
            Artists
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/events"
          >
            {" "}
            Events
          </Link>
          <Link
            className="hover:text-sky-500 px-2 normal-case text-lg font-normal"
            href="/contact-us"
          >
            {" "}
            Contact Us
          </Link>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length === 0 ? null : (
                  <span className="badge badge-sm indicator-item">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow rounded-sm"
            >
              <div className="card-body">
                {cartItems.length === 1 ? (
                  <span className="font-bold text-lg">
                    {cartItems.length} item
                  </span>
                ) : (
                  <span className="font-bold text-lg">
                    {cartItems.length} items
                  </span>
                )}

                <span className="">
                  Subtotal: $
                  {cartItems.reduce((total, item) => {
                    return total + item.price;
                  }, 0)}
                </span>
                <div className="card-actions z-50">
                  <Link
                    href="/Cart"
                    className="btn btn-block z-50 bg-[#ff4601]  hover:bg-[#ff4501c2]"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
