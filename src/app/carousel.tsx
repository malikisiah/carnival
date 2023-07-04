export default function Carousel() {
  return (
    <div className="container mx-auto">
      <div
        id="carouselCarnival"
        className="relative max-w-[100%] "
        data-te-carousel-init=""
        data-te-carousel-slide=""
      >
        {/*Carousel items*/}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/*First item*/}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active=""
            data-te-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img/carousel1.jpg"
              className="block w-full h-[35rem]"
              alt={"carousel1"}
            />
            <div className="absolute inset-x-[15%] bottom-14 hidden py-10 text-right text-white md:block">
              <h5 className="text-[1rem]">FREE SHIPPING AVAILABLE!</h5>
              <h5 className="font-bold text-[2rem]">TOURS AND ACTIVITIES</h5>
              <h5 className="text-[1.8rem]">YOUR COMFORT</h5>
              <h5 className="font-light text-[0.8rem]">START FROM</h5>
              <h5 className="font-bold text-[1rem] text-red-600">$100.</h5>
              <button className="font-bold px-[1.5rem] bg-[#fff] text-[15px] p-2 text-black">
                SHOP NOW
              </button>
            </div>
          </div>

          {/*Second item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img/carousel2.jpg"
              className="block w-full h-[35rem]"
              alt={"carousel2"}
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-[1rem]">FREE SHIPPING AVAILABLE!</h5>
              <h5 className="text-[2rem]">TOURS AND ACTIVITIES</h5>
              <h5 className="text-[1.5rem]">YOUR COMFORT</h5>
              <h5 className="text-[0.8rem]">START FROM</h5>
              <h5 className="text-[1rem] text-red-600">$100.</h5>
              <button className="px-[2rem] bg-[#fff] text-[15px] p-2 text-black">
                SHOP NOW
              </button>
            </div>
          </div>

          {/*Third item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/img/carousel3.jpg"
              className="block w-full h-[35rem]"
              alt={"carousel3"}
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-[1rem]">FREE SHIPPING AVAILABLE!</h5>
              <h5 className="text-[2rem]">TOURS AND ACTIVITIES</h5>
              <h5 className="text-[1.5rem]">YOUR COMFORT</h5>
              <h5 className="text-[0.8rem]">START FROM</h5>
              <h5 className="text-[1rem] text-red-600">$100.</h5>
              <button className="px-[2rem] bg-[#fff] text-[15px] p-2 text-black">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/*Carousel controls - prev item*/}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselCarnival"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        {/*Carousel controls - next item*/}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselCarnival"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
