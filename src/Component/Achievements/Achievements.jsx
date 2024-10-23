import styles from "./Achievements.module.css";

import { FaUsers, FaHandshake } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";


import { MdPayment } from "react-icons/md";

const Achievements = () => {
  return (
    <section id={styles.achievement_section}>
      <div className={`${styles.flex} ${styles.achievement_inner_content}`}>
        <div className={styles.achievement_title}>
          <h1>Helpin a local</h1>
          <h1 className={styles.bottom_text}>business reinvent itself.</h1>
          <p>We reached here with out hard work and dedication.</p>
        </div>

        <div className={`${styles.flex} ${styles.achievement_details}`}>
          <div className={`${styles.flex} ${styles.inner_details}`}>
            <div className={`${styles.flex} ${styles.single_details}`}>
              <span className={styles.members}>
                <FaUsers />
              </span>
              <div>
                <p>2,243,342</p>
                <small>Members</small>
              </div>
            </div>
            <div className={`${styles.flex} ${styles.single_details}`}>
              <span>
                <TbHandClick />
              </span>
              <div>
                <p>823,323</p>
                <small className={styles.event}>Event Bookings</small>
              </div>
            </div>
          </div>
          <div className={`${styles.flex} ${styles.inner_details}`}>
            <div className={`${styles.flex} ${styles.single_details}`}>
              <span>
                <FaHandshake />
              </span>
              <div>
                <p>46,348</p>
                <small>Clubs</small>
              </div>
            </div>
            <div className={`${styles.flex} ${styles.single_details}`}>
              <span>
                <MdPayment />
              </span>
              <div>
                <p>1,926,436</p>
                <small>Payments</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
