"use client";

import CGGearHotDeals from "./components/CGGearHotDeals";
import CGHeader from "./CGHeader";
import Banner from "./components/Banner";
import Categories from "@/app/CGgear/components/Categories";
import BlogPosts from "./components/BlogPosts";

export default function Page() {
  return (
    <>
      <CGHeader />
      <div className="flex items-center justify-center pt-8">
        <CGGearHotDeals />
      </div>

      <Banner />

      <div className="max-w-[73.5rem] h-auto w-full m-auto flex justify-evenly items-center space-x-6 py-4">
          <Categories
            subHeading="Women"
            image="https://via.placeholder.com/238x239"
          />
          <Categories
            subHeading="Men"
            image="https://via.placeholder.com/238x239"
          />
          <Categories
            subHeading="Accessory"
            image="https://via.placeholder.com/238x239"
          />
      </div>

      <BlogPosts/>
    </>
  );
}
