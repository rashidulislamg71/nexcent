
import styles from "./Unlock.module.css";
import frameImage from "../../assets/images/icons/Frame.png";

import { FaArrowRightLong } from "react-icons/fa6";

const Unlock = () => {
  return (
    <section className={styles.unlock_sections}>
      <div
        className={`${styles.unlock_inner_content} ${styles.inner_content} ${styles.flex}`}
      >
        <div className={styles.unlock_img}>
          <img src={frameImage} alt="Unlock Illustration" />
        </div>
        <div className={styles.unlock_text}>
          <h1>
            The unseen of spending three years at Pixelgrade
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            fugit impedit nesciunt dignissimos eaque excepturi asperiores
            repellendus ullam dolor aperiam delectus eligendi cupiditate
            mollitia maiores quae quidem nihil iste esse ea iusto, non accusamus
            eum. Rerum commodi ducimus labore, iure quasi nulla, repellendus
            delectus voluptas explicabo minus minima blanditiis dicta!
          </p>
          <button className={styles.btn}>
            Learn More <span><FaArrowRightLong /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
