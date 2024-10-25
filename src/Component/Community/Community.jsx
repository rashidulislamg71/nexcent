

import icon1 from "../../assets/images/icons/Icon.png";
import icon2 from "../../assets/images/icons/Icon1.png";
import icon3 from "../../assets/images/icons/Icon2.png";

import styles from "./Commounity.module.css";
const Community = () => {
  return (
    <section id="community_section" className={styles.manage_community_section}>
      <div
        className={`${styles.inner_content} ${styles.manage_community_inner_content}`}
      >
        <div className={styles.community_title}>
          <h1>
            Manage your entire community <br /> in a single system
          </h1>
          <p>Who is Nextcent suitable for?</p>
        </div>

        <div className={`${styles.community_cards} ${styles.flex}`}>
          <div className={styles.single_card}>
            <img src={icon1} alt="Membership Organizations" />
            <h3>
              Membership <br /> Organizations
            </h3>
            <p>
              Our membership management software provides full automation for
              membership renewals and payments.
            </p>
          </div>

          <div className={styles.single_card}>
            <img src={icon2} alt="National Associations" />
            <h3>
              National <br /> Associations
            </h3>
            <p>
              Our membership management software provides full automation for
              membership renewals and payments.
            </p>
          </div>

          <div className={styles.single_card}>
            <img src={icon3} alt="Clubs and Groups" />
            <h3>
              Clubs and <br /> Groups
            </h3>
            <p>
              Our membership management software provides full automation for
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
