import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Carousel() {
    const slides = [
        {
            url: '/carousel1.jpg'
        },
        {
            url: '/carousel2.jpg'
        },
        {
            url: '/carousel3.jpg'
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

        <div className='max-w-[90rem] h-[49rem] w-full m-auto  relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            >
                <div className="absolute inset-x-[15%] bottom-14 hidden py-10 text-right text-white md:block">
                    <p>FREE SHIPPING AVAILABLE! </p>
                    <h5 className="font-bold text-[2rem]">TOURS AND ACTIVITIES</h5>
                    <h5 className="text-[1.8rem]">YOUR COMFORT</h5>
                    <p>START FROM </p>
                    <h5 className="font-bold text-[1.3rem] text-red-600">$100.</h5>
                    <button className="font-bold px-[1rem] bg-[#fff] text-[15px] p-2 text-black">
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
    );
}