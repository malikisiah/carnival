export default function Signup() {
  return (
    <div className='items-center justify-center align-middle text-white bg-neutral-900'>
      <h1 className='text-center text-xl block pt-5 pb-3'>
        SIGN UP BELOW FOR EARLY UPDATES
      </h1>
      <p className='text-center mx-auto block text-sm font-light pb-12 opacity-70'>
        You a Client , large or small, and want to participate in this
        adventure, please send us an email to support@CarnivalGuide.com
      </p>
      <div className='flex justify-center pb-8'>
        <input
          type='text'
          placeholder='Enter Your Email Address'
          className='input border-1 border-white border-opacity-40 w-full max-w-xs block focus:outline-0 bg-transparent rounded-none'
        />
      </div>
    </div>
  );
}
