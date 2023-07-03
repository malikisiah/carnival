import styles from "./Banner.module.css";

type BannerProps = {
  img1: string;
  img2: string;
};

const Banner = ({ img1, img2 }: BannerProps) => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex gap-4">
        <div className={`${styles.shineEffect} w-1/2`}>
          <a href="">
            <img className="banner" alt="banner" src={img1} />
          </a>
        </div>
        <div className={`${styles.shineEffect} w-1/2`}>
          <a href="">
            <img className="banner" alt="banner" src={img2} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
