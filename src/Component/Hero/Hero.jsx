import styles from "./Hero.module.css";
import hero_img from "../../assets/images/icons/Illustration.png";


const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={`${styles.hero_inner_content} ${styles.flex}`}>
        <div className={styles.hero_text}>
          <h1>
            Lessons and insights <br />
            <span>from 8 years.</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className={styles.btn}>Register</button>
        </div>
        <div className={styles.hero_img}>
          <img src={hero_img} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
