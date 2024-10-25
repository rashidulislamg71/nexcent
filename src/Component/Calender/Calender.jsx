import styles from "./Calender.module.css";
import calender_img from "../../assets/images/icons/Calender.png";

import { FaArrowRightLong } from "react-icons/fa6";

const Calender = () => {
  return (
    <section className={styles.calender_section} id={styles.calender}>
      <div className={`${styles.flex} ${styles.calender_inner_content}`}>
        <div className={`${styles.calender_img}`}>
          <img data-aos="zoom-in" src={calender_img} alt="Image" />
        </div>
        <div className={`${styles.calender_text}`}>
            <h1 data-aos="fade-down">How to desing your site like we did.</h1>
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button data-aos="fade-left" >Learn More <span><FaArrowRightLong /></span></button>
        </div>
      </div>
    </section>
  );
};

export default Calender;
