type BlogDetailsProps = {
  name: string;
  date: string;
  comment: string;
};

const BlogDetails = ({ name, date, comment }: BlogDetailsProps) => {
  return (
    <div className="w-full flex flex-col items-center mt-3">
      <a href="#" className="text-center font-bold text-xs">
        {name}
      </a>
      <div className="flex justify-between w-full">
        <a href="#" className="text-left font-bold text-xs">
          {date}
        </a>
        <a href="#" className="text-right font-bold text-xs">
          {comment}
        </a>
      </div>
      <div className="flex justify-end w-full mt-1">
        <a href="#" className="text-blue-500">
          Read more
        </a>
      </div>
    </div>
  );
};

const BlogCarousel = () => {
  return (
    <div className="flex justify-center">
      <div className="blog-carousel bg-red-700 w-auto h-auto">
        <div className="flex justify-between items-center p-3 mb-5">
          <span className="block-title bg-green-300 px-4 py-2">
            FROM THE BLOG
          </span>
          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              Prev
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              Next
            </button>
          </div>
        </div>
        <div className="blog-carousel-content bg-blue-300 w-auto h-auto">
          <div className="flex gap-7 px-4 py-3 Blog-item">
            <div>
              <a href="#">
                <img src="https://via.placeholder.com/270x257" alt="blog1" />
              </a>
              <BlogDetails
                name="My name is john wick and you killed my dog"
                date="Jan 1, 2023"
                comment="20 Comments"
              />
            </div>
            <div>
              <a href="#">
                <img src="https://via.placeholder.com/270x257" alt="blog2" />
              </a>
              <BlogDetails
                name="Blog 2"
                date="Feb 2, 2023"
                comment="10 Comments"
              />
            </div>
            <div>
              <a href="#">
                <img src="https://via.placeholder.com/270x257" alt="blog3" />
              </a>
              <BlogDetails
                name="Blog 3"
                date="Mar 3, 2023"
                comment="15 Comments"
              />
            </div>
            <div>
              <a href="#">
                <img src="https://via.placeholder.com/270x257" alt="blog4" />
              </a>
              <BlogDetails
                name="Blog 4"
                date="Apr 4, 2023"
                comment="30 Comments"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
