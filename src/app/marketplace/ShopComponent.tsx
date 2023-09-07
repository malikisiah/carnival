"use client";
import Image from "next/image";
import { useState } from "react";

export default function ShopComponent({ header, items }: ShopComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const displayedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-2xl font-bold  sm:text-3xl">{header}</h2>
          </header>

          <div className="mt-4 flex align-middle items-center">
            <p className="text-sm font-semibold ">Best Sellers</p>
            <div className="join ml-auto pr-28 space-x-7">
              <button
                className="join-item btn"
                onClick={() => setCurrentPage(1)}
              >
                State 1
              </button>
              <button
                className="join-item btn"
                onClick={() => setCurrentPage(2)}
              >
                State 2
              </button>
              {/* <button className="join-item btn" onClick={() => setCurrentPage(3)}>State 3</button>
              <button className="join-item btn" onClick={() => setCurrentPage(4)}>State 4</button> */}
            </div>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((item, idx) => {
              return (
                <li key={idx}>
                  <div className="group block overflow-hidden">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      quality={100}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs  ">{item.name}</h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider "> {item.price} </span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
