import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const BlogCarousel = () => {
  const [carouselPosition, setCarouselPosition] = useState(0);

  const nextImage = () => {
    // If we're not at the end of the carousel, move to the next image
    if (carouselPosition < 3) {
      setCarouselPosition(carouselPosition + 1);
    }
  };

  const prevImage = () => {
    // If we're not at the start of the carousel, move to the previous image
    if (carouselPosition > 0) {
      setCarouselPosition(carouselPosition - 1);
    }
  };

  return (
    <div className="flex overflow-hidden w-full justify-center">
      <button onClick={prevImage} className="p-4 bg-gray-200">
        Prev
      </button>
      <div
        className="flex transition-transform duration-200 ease-in-out"
        style={{ transform: `translateX(-${carouselPosition * 270}px)` }}
      >
        {/* Place images here as before, but now inside this moving div. */}
        <div className="carousel-item w-270 h-257 border-2 border-gray-300 rounded-none">
          <img
            src="/adspc2.jpg"
            alt="Drink"
            className="object-cover w-full h-full"
          />
        </div>

        {/* ... Repeat for other images */}
      </div>
      <button onClick={nextImage} className="p-4 bg-gray-200">
        Next
      </button>
    </div>
  );
};

export default BlogCarousel;
