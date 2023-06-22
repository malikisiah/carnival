import Signup from "./signup";

export default function Footer() {
  return (
    <>
      <Signup />
      <footer className='footer p-10 bg-black text-neutral-content justify-center space-x-44'>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            Information
          </span>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </div>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            Company
          </span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </div>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            My Account
          </span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
        <div>
          <span className='footer-title text-white opacity-90 text-xl'>
            Support
          </span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
      </footer>
    </>
  );
}
