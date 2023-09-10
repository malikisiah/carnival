"use client";
import LatestDealsDetails from "./LatestDealsDetails";
import { useState } from "react";
import LatestDealsCountDown from "./LatestDealsCountDown";

const allBlogs = [
  {
    id: "Maecenasconsequatmauris_1",
    name: "Maecenas consequat mauris",
    image: "/LatestDeals/latestdealsimg1.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "1",
  },
  {
    id: "Maecenasconsequatmauris_2",
    name: "Maecenas consequat mauris",
    image: "/LatestDeals/latestdealsimg2.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "2",
  },
  {
    id: "Maecenasconsequatmauris_3",
    name: "Maecenas consequat mauris",
    image: "/LatestDeals/latestdealsimg3.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "3",
  },
  {
    id: "Maecenasconsequatmauris_4",
    name: "Maecenas consequat mauris",
    image: "/LatestDeals/latestdealsimg4.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "4",
  },
  {
    id: "Maecenasconsequatmauris_5",
    name: "Maecenas consequat mauris",
    image: "/LatestDeals/latestdealsimg5.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "5",
  },
  {
    id: "Maecenasconsequatmauris_6",
    name: "Maecenas consequat mauris",
    image: "https://via.placeholder.com/208x258",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "6",
  },
  {
    id: "Maecenasconsequatmauris_7",
    name: "Maecenas consequat mauris",
    image: "https://via.placeholder.com/208x258",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "7",
  },
  {
    id: "Maecenasconsequatmauris_8",
    name: "Maecenas consequat mauris",
    image: "https://via.placeholder.com/208x258",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "8",
  },
];

const LatestDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogs = allBlogs.slice(currentIndex, currentIndex + 5);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, allBlogs.length - 5)
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="max-w-[73.5rem] h-auto w-full m-auto bg-white">
      <div className="flex justify-center bg-white">
        <div className="w-auto h-auto">
          <div className="flex pt-6">
            {/* Recent Latest Deals */}
            <div className="flex-1">
              <h3 className="font-bold uppercase text-[1rem]">Latest Deals</h3>
            </div>

            {/*Timer icon */}
            <div className="border-2 border-solid border-white p-1">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="orange"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </div>

            {/* END IN */}
            <div className="border-2 border-solid border-white p-1">
              <p className="uppercase text-[0.9rem] pr-2">End in</p>
            </div>

            {/* CountDown */}
            <LatestDealsCountDown />

            {/* PREVIOUS Button */}
            <div className="flex gap-1 pl-6">
              <button
                className="text-white border-2 border-solid border-gray-100 bg-gray-400 hover:bg-orange-500 px-3 rounded"
                onClick={goPrev}
              >
                &#8249;
              </button>

              {/* NEXT Button */}
              <button
                className="text-white border-2 border-solid border-gray-100 bg-gray-400 hover:bg-orange-500 px-3 rounded"
                onClick={goNext}
              >
                &#8250;
              </button>
            </div>
          </div>

          {/* Orange-Gray lines */}
          <div className="pt-2">
            <svg viewBox="0 0 260 1" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" x2="31" strokeWidth="1" stroke="#F7450F" />
              <line x1="280" x2="31" strokeWidth="0.3" stroke="#E5E7EB" />
            </svg>
          </div>

          <div className="flex pt-4 flex-row justify-between gap-2.5">
            {blogs.map((blog, idx) => (
              <div key={idx}>
                <LatestDealsDetails
                  id={blog.id}
                  name={blog.name}
                  image={blog.image}
                  newPrice={blog.newPrice}
                  oldPrice={blog.oldPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;
