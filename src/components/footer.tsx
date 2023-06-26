import Signup from "./signup";

export default function Footer() {
  return (
    <>
      <Signup />
      <footer className='footer p-10 bg-black text-neutral-content justify-center space-x-44'>
        <div className=''>
          <span className='footer-title text-white opacity-90 text-xl'>
            Information
          </span>
          <a className='inline-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>{" "}
            <span className='pl-3 opacity-70'>
              2046 Blue Spruce Lane Laurel,<br></br> tetxac, Orton Tolanto,
              Canada
            </span>
          </a>
          <a className='inline-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>
            <span className='pl-3 opacity-70'>0200 410-369-3920</span>
          </a>
          <a className='inline-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>
            <span className='pl-3 opacity-70'>info@kutethemes.com</span>
          </a>
          <a className='inline-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
              />
            </svg>
            <span className='pl-3 opacity-70'>Hotline: 090 999 8686</span>
          </a>
        </div>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            Company
          </span>
          <a className='link link-hover opacity-70' href='/'>
            About us
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Testimonials
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Affiliate Program
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Terms & Conditions
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Contact Us
          </a>
        </div>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            My Account
          </span>
          <a className='link link-hover opacity-70' href='/'>
            My Orders
          </a>
          <a className='link link-hover opacity-70' href='/'>
            My Credit Slips
          </a>
          <a className='link link-hover opacity-70' href='/'>
            My Addresses
          </a>
          <a className='link link-hover opacity-70' href='/'>
            My Personal Info
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Specials
          </a>
        </div>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            Support
          </span>
          <a className='link link-hover opacity-70' href='/'>
            Payments & My Vouchers
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Saved Cards
          </a>
          <a className='link link-hover opacity-70' href='/'>
            Cancellation & Returns
          </a>
          <a className='link link-hover opacity-70' href='/'>
            FAQ & Support Online
          </a>
        </div>
      </footer>
    </>
  );
}
