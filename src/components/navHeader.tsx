import Link from "next/link";
export default function NavHeader() {
  return (
    <>
      <div className='flex font-light items-center align-middle justify-center h-8 text-sm '>
        <p> Welcome to Carnival Guide | Call Us: +09 957774334</p>
        <div className='ml-96'>
          <div className='dropdown dropdown-hover z-50'>
            <label tabIndex={0} className='hover:text-sky-500 pr-3 '>
              <Link href='/'>
                {" "}
                My Account{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 ml-1 inline'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Link>
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
            <Link href='/'> Buyer Protection</Link>
          </div>
          |
          <div className='inline-flex hover:text-sky-500 px-3'>
            <Link href='/'> Services</Link>
          </div>
          |
          <div className='inline-flex hover:text-sky-500 px-3'>
            <Link href='/'> Support</Link>
          </div>
        </div>
      </div>
    </>
  );
}
