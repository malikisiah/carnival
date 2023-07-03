const Banner = ({ img1, img2 }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex gap-4">
        <div className="w-1/2">
          <a className="box-img" href="">
            <img alt="banner" src={img1} />
          </a>
        </div>
        <div className="w-1/2">
          <a className="box-img" href="">
            <img alt="banner" src={img2} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
