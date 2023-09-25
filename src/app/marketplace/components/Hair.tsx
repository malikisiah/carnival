import HairDetails from "./HairDetails";
import { useState } from "react";

const allBlogs = [
  {
    id: "Maecenasconsequatmauris_1",
    name: "Maecenas consequat mauris",
    image: "/HairMarketPlace/hair1.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "1",
  },
  {
    id: "Maecenasconsequatmauris_2",
    name: "Maecenas consequat mauris",
    image: "/HairMarketPlace/hair2.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "2",
  },
  {
    id: "Maecenasconsequatmauris_3",
    name: "Maecenas consequat mauris",
    image: "/HairMarketPlace/hair3.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "3",
  },
  {
    id: "Maecenasconsequatmauris_4",
    name: "Maecenas consequat mauris",
    image: "/HairMarketPlace/hair4.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "4",
  },
  {
    id: "Maecenasconsequatmauris_5",
    name: "Maecenas consequat mauris",
    image: "/HairMarketPlace/hair5.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "5",
  },
  {
    id: "Maecenasconsequatmauris_6",
    name: "Maecenas consequat mauris",
    image: "/HairMarketPlace/hair6.jpg",
    newPrice: 45.0,
    oldPrice: 52.0,
    alt: "6",
  },
];

const Hair = () => {
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
            
            {/* HAIR */}
            <div className="absolute inset-x-[5.8%] bottom-[63%] hidden md:block text-right">
                    <button className="bg-[#F5214E] hover:bg-pink-500 text-white font-bold px-[1rem] text-[20px] p-2 border border-pink-500 rounded">
                        SHOP NOW
                    </button>
                </div>
            {/* <div className="flex-1">
                <a className="border-solid border-orange-500 bg-[#F7450F] hover:border-white" href="#">
                    <h3 className="font-bold uppercase text-[1rem] text-white text-left pl-3">Hair</h3>
                </a>
            </div> */}
          </div>

          {/* Orange-Gray lines */}
          <div>
            <svg viewBox="0 0 260 1" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" x2="31" strokeWidth="1" stroke="#F7450F" />
              <line x1="280" x2="31" strokeWidth="0.3" stroke="#E5E7EB" />
            </svg>
          </div>

          <div className="flex pt-4 flex-row justify-between gap-2.5">
            {blogs.map((blog, idx) => (
              <div key={idx}>
                <HairDetails
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

export default Hair;
