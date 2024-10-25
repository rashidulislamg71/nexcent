import styles from "./NavBar.module.css";
import logo from "../../assets/images/icons/Nexcent_Logo.png";
import { Link } from "react-scroll";
import { useRef, useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";

const NavBar = () => {
  const [showMenu, setShowmenu] = useState(false);

  const navRef = useRef();

  const toggolMenu = () => {
    setShowmenu(!showMenu);
    navRef.current.classList.toggle(styles.nav_responsive);
  };

  const closeMenu = () => {
    setShowmenu(false);
    navRef.current.classList.remove(styles.nav_responsive);
  };

  return (
    <header className={styles.header_container}>
      <div className={` ${styles.flex} ${styles.header_inner_content}`}>
        <div className={`${styles.flex} ${styles.logo}`}>
          <Link
          onClick={closeMenu}
            activeClass="active"
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}

          >
            {" "}
            <img src={logo} alt="Logo" /> <span>Nexcent</span>
          </Link>
        </div>

        <nav ref={navRef} className={`${styles.flex} ${styles.menu}`}>
          <Link
             onClick={closeMenu}
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
             onClick={closeMenu}
            activeClass="active"
            to="customers_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Clients
          </Link>

          <Link
             onClick={closeMenu}
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
             onClick={closeMenu}
            activeClass="active"
            to="blog_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
          >
            Blog
          </Link>

          <Link
             onClick={closeMenu}
            activeClass="active"
            to="footer_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Contact Us
          </Link>

          <Link
             onClick={closeMenu}
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

        <button className={styles.menu_toggleBtn} onClick={toggolMenu}>
          {showMenu ? <FiX /> : <IoMdMenu />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
