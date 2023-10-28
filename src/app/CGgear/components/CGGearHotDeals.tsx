"use client";
import React, { useState, useContext } from "react";
import { CartContext } from "@/context/CartProvider";

export default function CGGearHotdeals() {
  return (
    <div className="max-w-[73.5rem] h-auto w-full m-auto flex justify-end items-center py-4">
    <div
      style={{
        width: "300px",
        height: "100%",
        //backgroundColor: 'yellow',
      }}
      className=""
    >
      <Header />
      <BlockOne />
      {/* Other content in CGGearHotdeals */}
    </div>
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        width: "268px",
        height: "50px",
        backgroundColor: "#EEEEEE",
        marginLeft: "15px",
        display: "flex",
        alignItems: "center",
        fontFamily: "Oswald, sans-serif",
        fontSize: "12px",
        fontWeight: "bold",
        color: "#333",
      }}
    >
      <span style={{ marginLeft: "23px" }}>HOT DEAL OF THIS WEEK</span>
    </div>
  );
}

function BlockOne() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error");
  }

  const { addToCart } = context;
  const [currentItem, setCurrentItem] = useState(0);
  const { image, title, newPrice, oldPrice } = items[currentItem];

  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + items.length) % items.length);
  };

  return (
    <div
      style={{
        width: "268px",
        height: "400px",
        border: "1px solid #EEEEEE",
        marginLeft: "15px",
      }}
    >
      <Timer />

      <div style={{ position: "relative", textAlign: "center" }}>
        <img src={image} alt={title} style={{ marginLeft: "15px" }} />
        <button
          onClick={prevItem}
          style={{
            position: "absolute",
            top: "50%",
            left: "15px",
            transform: "translateY(-50%)",
          }}
        >
          {"<"}
        </button>
        <button
          onClick={nextItem}
          style={{
            position: "absolute",
            top: "50%",
            right: "15px",
            transform: "translateY(-50%)",
          }}
        >
          {">"}
        </button>
      </div>

      <p
        style={{
          textAlign: "center",
          fontFamily: "Oswald, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {title}
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ color: "red", fontWeight: "bold" }}>{newPrice}</p>
        <p style={{ marginLeft: "5px", textDecoration: "line-through" }}>
          {oldPrice}
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() =>
            addToCart({
              stripe_id: "price_1NWO7tE6rPXTXIhKVgJho8O9",
              name: "Test Item",
              price: 29.99,
              qty: 1,
              image: image,
            })
          }
          style={{
            backgroundColor: "#11A8AB",
            color: "white",
            width: "120px",
            height: "34px",
            marginRight: "5px",
          }}
        >
          Add to Cart
        </button>
        <button
          style={{
            backgroundColor: "#EEEEEE",
            width: "40px",
            height: "34px",
            marginRight: "5px",
          }}
        >
          {"\u2764"}
        </button>
        <button
          style={{ backgroundColor: "#EEEEEE", width: "40px", height: "34px" }}
        >
          {"\u27F3"}
        </button>
      </div>

      {/* Other content in BlockOne */}
    </div>
  );
}

const items = [
  {
    id: 1,
    image: "HotDealsAssets/GCDealAsset.jpg",
    title: "State 1",
    newPrice: "$29.99",
    oldPrice: "$39.99",
  },
  {
    id: 2,
    image: "HotDealsAssets/GCDealAsset.jpg",
    title: "State 2",
    newPrice: "$29.99",
    oldPrice: "$59.99",
  },
  // Add more items as needed
];

function Timer() {
  return (
    <div
      style={{
        width: "268px",
        height: "66px",
        paddingTop: "23px",
        //backgroundColor: '#EEEEEE',
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <TimerBox />
      <TimerBox />
      <TimerBox />
      <TimerBox />
      {/* Content for Timer goes here */}
    </div>
  );
}

function TimerBox() {
  return (
    <div style={{}}>
      <div
        style={{
          width: "42px",
          height: "34px",
          backgroundColor: "red",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "16px" }}>00</span>
      </div>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "12px", color: "black" }}>Days</span>
      </div>
    </div>
  );
}
