export default function NavFooter() {
  return (
    <div className="bg-white flex items-center justify-center h-12 sticky top-28 z-30">
      {" "}
      <div className="join">
        <div className="bg-[#ff4601] rounded-none inline-flex items-center justify-start text-white font-bold w-72 text-sm pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          CATEGORIES
        </div>
        <select className="select select-bordered focus:outline-none rounded-none join-item font-normal text-sm bg-white">
          <option>All Categories</option>
          <option>Fashion</option>
          <option>Top Blouses</option>
          <option>Clothing</option>
          <option>Furniture</option>
          <option>Bathtime Goods</option>
          <option>Shower Curtains</option>
        </select>
        <div>
          <div>
            <input
              className="input input-bordered rounded-none focus:outline-none join-item w-96 bg-white font-normal text-sm"
              placeholder="Type Your Keyword..."
            />
          </div>
        </div>
        <button className="btn bg-white join-item rounded-none hover:bg-sky-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <select className="select select-bordered w-22 focus:outline-none rounded-none join-item font-normal text-sm bg-white">
          <option>USD</option>
          <option>Euro</option>
          <option>GBP</option>
        </select>
        <select className="select select-bordered w-26 focus:outline-none rounded-none join-item font-normal text-sm bg-white">
          <option>English</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>
    </div>
  );
}
