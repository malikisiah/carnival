export default function Home() {
  return (
    <div
      className='hero min-h-screen'
      // style={{
      //   backgroundImage: `url("https://w.wallhaven.cc/full/xl/wallhaven-xlrp3z.jpg")`,
      // }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Project Carnival</h1>
          <p className='mb-5'></p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
