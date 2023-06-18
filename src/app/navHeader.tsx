export default function NavHeader() {
  return (
    <>
      <div className='flex font-light items-center align-middle justify-center h-8 text-sm'>
        <p> Welcome to Carnival Guide | Call Us: +09 957774334</p>
        <div className='ml-96'>
          <div className='dropdown dropdown-hover z-50'>
            <label tabIndex={0} className='hover:text-sky-500 pr-3'>
              My Account
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-white box w-52'
            >
              <li>
                <a>Wishlist</a>
              </li>
              <li>
                <a>My Account</a>
              </li>
              <li>
                <a>Compare</a>
              </li>
              <li>
                <a>Checkout</a>
              </li>
              <li>
                <a>Login/Register</a>
              </li>
            </ul>
          </div>
          |
          <div className='inline-flex hover:text-sky-500 px-3'>
            <label> Buyer Protection</label>
          </div>
          |
          <div className='inline-flex hover:text-sky-500 px-3'>
            <label> Services</label>
          </div>
          |
          <div className='inline-flex hover:text-sky-500 px-3'>
            <label> Support</label>
          </div>
        </div>
      </div>
    </>
  );
}
