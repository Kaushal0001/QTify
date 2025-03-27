import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/vibrating-headphone.png`}
          width={212}
          alt="hero-section-headphones"
        />
      </div>
    </div>
  );
};

export default Hero;
