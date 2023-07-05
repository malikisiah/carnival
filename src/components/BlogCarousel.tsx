import React, { useState } from "react";
import BlogDetails from "./BlogDetails";

const allBlogs = [
  {
    name: "Blog 1",
    date: "Jan 1, 2023",
    comment: "20 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog1",
  },
  {
    name: "Blog 2",
    date: "Feb 2, 2023",
    comment: "10 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog2",
  },
  {
    name: "Blog 3",
    date: "Mar 3, 2023",
    comment: "15 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog3",
  },
  {
    name: "Blog 4",
    date: "Apr 4, 2023",
    comment: "30 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog4",
  },
  {
    name: "Blog 5",
    date: "May 5, 2023",
    comment: "40 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog5",
  },
  {
    name: "Blog 6",
    date: "Jun 6, 2023",
    comment: "50 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog6",
  },
  {
    name: "Blog 7",
    date: "Jul 7, 2023",
    comment: "60 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog7",
  },
  {
    name: "Blog 8",
    date: "Aug 8, 2023",
    comment: "70 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog8",
  },
  {
    name: "Blog 9",
    date: "Sep 9, 2023",
    comment: "80 Comments",
    imgSrc: "https://via.placeholder.com/270x257",
    alt: "blog9",
  },
  // add more blogs here...
];

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogs = allBlogs.slice(currentIndex, currentIndex + 4);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, allBlogs.length - 4)
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex justify-center">
      <div className="blog-carousel w-auto h-auto">
        <div className="flex justify-between items-center p-3 mb-2">
          <span className="block-title px-4 py-2">FROM THE BLOG</span>
          <div className="flex gap-3">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={goPrev}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={goNext}
            >
              Next
            </button>
          </div>
        </div>
        <div className="blog-carousel-content w-auto h-auto">
          <div className="flex gap-7 px-4 py-3 Blog-item">
            {blogs.map((blog) => (
              <div key={blog.name}>
                <a href="#">
                  <img src={blog.imgSrc} alt={blog.alt} />
                </a>
                <BlogDetails
                  name={blog.name}
                  date={blog.date}
                  comment={blog.comment}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
