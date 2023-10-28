import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function CGHeader() {
  const slides = [
    {
        url: '/CGHeader/cggearheader1.jpg'
    },
    {
        url: '/CGHeader/cggearheader2.jpg'
    },
    {
        url: '/CGHeader/cggearheader3.jpg'
    },
];

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
};

const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
};
  return (
    <>
          <div className="flex flex-row justify-center bg-white">
         {/* Category Buttons (vertical) */}
          <div className="flex flex-col pt-5 pb-2">
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Electronics
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Smartphone & Table
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Televisions
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Shoes & Accessories
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Camera & Photo
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Watch & Jewellry
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Accessories
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Sport & Outdoors
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Computer & Networking
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Flashlights & Lamps
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Camera & Photo
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Sport & Outdoors
            </button>
            <button className="hover:text-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-left text-gray-500">
              Watch & Jewellry
            </button>
            <button className="hover:text-white hover:bg-orange-500 px-[0.60rem] text-[0.9rem] p-[0.47rem] text-center text-gray-500 border border-gray">
              All Categories    
              &#8250;
            </button>
          </div>
                    
      <div className=" flex justify-center join rounded-none pt-4 text-xl font-bold">
        {/* CAROUSEL 680x520*/}
        <div className="flex artboard w-[680px] h-[520px] text-center items-center justify-center bg-[#a9a9a9] border border-white">
                  <div className='w-[75.3rem] h-[30rem] m-auto relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-contain duration-1000'>
                <div className="absolute inset-x-[10%] bottom-[47%] hidden md:block text-right">
                  <button className="bg-[#F5214E] hover:bg-pink-500 text-white font-bold px-[1rem] text-[20px] p-2 border border-pink-500 rounded">
                    SHOP NOW
                  </button>
                </div>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                    </div>
                ))}
            </div>
        </div>
        </div>
        <div className="join-vertical">
          <div className="flex artboard w-[210px] h-[400px] text-center items-center justify-center bg-[#bcbcbc] border border-white">
            210x400
          </div>
          <div className="flex artboard w-[210px] h-[120px] text-center items-center justify-center bg-[#bcbcbc] border border-white">
            210x120
          </div>
        </div>
      </div>
      </div>
      
      {/* BLOG POSTS */}
      <div className="flex rounded-none text-xl font-bold join justify-center pt-1 bg-white">
        <div className=" flex artboard w-[390px] h-[200px] text-center items-center justify-center bg-[#bcbcbc] border border-white">
          390x200
        </div>
        <div className="flex artboard w-[390px] h-[200px] text-center items-center justify-center bg-[#bcbcbc] border border-white">
          390x200
        </div>
        <div className="flex artboard w-[390px] h-[200px] text-center items-center justify-center bg-[#bcbcbc] border border-white">
          390x200
        </div>
      </div>
    </>
  );
}
