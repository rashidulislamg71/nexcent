import styles from "./Footer.module.css";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { RiYoutubeFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";

import logo from "../../assets/images/icons/Nexcent_Logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <div className="inner_content">
        <div className={`${styles.flex} ${styles.footer_top}`}>
          <div className={styles.footer_about}>
            <div className={` ${styles.flex} ${styles.footer_logo}`}>
              <img src={logo} alt="Logo" />
              <span>Nexcent</span>
            </div>
            <p>
              Building connections and communities with Nextcent. Grow your
              community efficiently with our solutions.
            </p>
          </div>

          <div className={styles.footer_links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_contact}>
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:support@nexcent.com">support@nexcent.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
            <div className={`${styles.flex} ${styles.social_icons}`}>
              <a href="#">
                <span>
                  <MdOutlineFacebook />
                </span>
              </a>
              <a href="#">
                <span>
                  <AiFillTwitterCircle />
                </span>
              </a>
              <a href="#">
                <span>
                  <FaLinkedin />
                </span>
              </a>
              <a href="#">
                <span>
                  <RiYoutubeFill />
                </span>
              </a>
              <a href="#">
                <span>
                  <FaInstagramSquare />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>&copy; 2024 Nexcent. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
