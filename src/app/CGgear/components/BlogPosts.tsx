import Image from "next/image";
import BlogPostsDetails from "./BlogPostsDetails";
import { useState } from "react";

const allBlogs = [
    {
        date: "21 October",
        name: "Maecenas Consequat Mauris",
        image: "https://via.placeholder.com/292x292",
        alt: "1",
    },
    {
        date: "22 October",
        name: "Nec Semper Tristique Todsife",
        image: "https://via.placeholder.com/292x292",
        alt: "2",
    },
    {
        date: "23 October",
        name: "Maecenas Consequat Mauris",
        image: "https://via.placeholder.com/292x292",
        alt: "3",
    },
    {
        date: "24 October",
        name: "Nec Semper Tristique Todsife",
        image: "https://via.placeholder.com/292x292",
        alt: "4",
    },
  ];

  const BlogPosts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const blogs = allBlogs.slice(currentIndex, currentIndex + 2);
  
    const goNext = () => {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, allBlogs.length - 2)
      );
    };
  
    const goPrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="max-w-[73.5rem] h-auto w-full m-auto bg-white">
        <div className="flex justify-center bg-white">
            <div className="w-auto h-auto">
                {/* Recent Blog Posts */}    
                <div className="pt-6"> 
                    <svg viewBox="0 0 290 1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" x2="7" stroke="black" />
                    </svg>
                    <h3 className="font-bold uppercase text-[1.2rem]">Recent Blog Posts</h3>
                    <p className="text-gray-500">The lastest news from your blog</p>
                </div>
                
                {/* PREVIOUS Button */}  
                <div className="flex flex-row-reverse justify-between items-center pb-2">
                    <div className="flex gap-3">
                        <button
                            className="bg-white text-gray-500 border-2 border-solid border-gray-100 px-3 py-1 rounded"
                            onClick={goPrev}
                        >
                        Prev
                        </button>

                {/* NEXT Button */} 
                        <button
                            className="bg-white text-gray-500 border-2 border-solid border-gray-100 px-3 py-1 rounded"
                            onClick={goNext}
                         >
                         Next
                        </button>
                    </div>
                </div>

          <div className="flex pt-5 flex-row justify-between gap-6">
            {blogs.map((blog) => (
              <div key={blog.name}>

                <BlogPostsDetails
                    date={blog.date}
                    name={blog.name}
                    image={blog.image}
                />
              </div>
            ))}
          </div>
        
        {/* Image block 142x62 */} 
        <div>
            <div className="flex items-stretch gap-8 pt-8 pb-8">
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='1'
                        width={142}
                        height={62}
                    />
                </a> 
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='2'
                        width={142}
                        height={62}
                    />
                </a> 
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='3'
                        width={142}
                        height={62}
                    />
                </a> 
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='4'
                        width={142}
                        height={62}
                    />
                </a> 
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='5'
                        width={142}
                        height={62}
                    />
                </a> 
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='6'
                        width={142}
                        height={62}
                    />
                </a> 
                <a href="#">
                    <Image src="https://via.placeholder.com/142x62"
                        alt='7'
                        width={142}
                        height={62}
                    />
                </a> 
            </div>
        </div>
        </div> 
      </div>
      </div>
  );
};

export default BlogPosts;