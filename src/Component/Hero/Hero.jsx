

import styles from "./Hero.module.css";
import hero_img from "../../assets/images/icons/Illustration.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {

  return (
    <section id="hero_section" className={styles.hero_section}>
      <div className={`${styles.hero_inner_content} ${styles.flex}`}>
        <div className={styles.hero_text}>
          <h1 data-aos="fade-down" data-aos-duration="1500">
            Lessons and insights <br />
            <span>from 8 years.</span>
          </h1>
          <p data-aos="fade-down" data-aos-duration="1000">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button data-aos="fade-right" className={styles.btn}>Register Now <span><FaArrowRightLong /></span></button>
        </div>
        <div className={styles.hero_img}>
          <img src={hero_img} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
