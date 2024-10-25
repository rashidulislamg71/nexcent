import styles from "./NavBar.module.css";
import logo from "../../assets/images/icons/Nexcent_Logo.png";
import { Link } from "react-scroll";
import { useRef } from "react";

const NavBar = () => {
  const navRef = useRef();

  return (
    <header className={styles.header_container}>
      <div className={` ${styles.flex} ${styles.header_inner_content}`}>
        <div className={`${styles.flex} ${styles.logo}`}>
          <img src={logo} alt="Logo" /> <span>Nexcent</span>
        </div>

        <nav className={`${styles.flex} ${styles.menu}`}>
          <Link
            activeClass="active"
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="clients_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Clients
          </Link>

          <Link
            activeClass="active"
            to="community_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Community
          </Link>

          <Link
            activeClass="active"
            to="blog_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Blog
          </Link>

          <Link
            activeClass="active"
            to="contact_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Contact Us
          </Link>

          <Link
            activeClass="active"
            to="registration_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Account 
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
