const BlogCarousel = () => {
  return (
    <div className="flex justify-center">
      <div className="blog-carousel bg-red-700 w-9/12 h-410">
        <div className="flex justify-between items-center p-3 mb-5">
          <span className="block-title bg-green-300 px-4 py-2">
            FROM THE BLOG
          </span>
          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Prev</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Next</button>
          </div>
        </div>
        <div className="blog-carousel-content bg-blue-300 w-auto h-auto">
          <div className="px-4 py-3 Blog-item">
            <div className="flex gap-10 blog-photo">
              <a href="#">
                <img src="https://via.placeholder.com/200x200" alt="blog1" />
              </a>
              <a href="#">
                <img src="https://via.placeholder.com/200x200" alt="blog2" />
              </a>
              <a href="#">
                <img src="https://via.placeholder.com/200x200" alt="blog3" />
              </a>
              <a href="#">
                <img src="https://via.placeholder.com/200x200" alt="blog4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
