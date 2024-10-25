import styles from "./Coustomer.module.css";

import customer_img from "../../assets/images/icons/customer.png";

import client1 from "../../assets/images/Clients/client1.png";
import client2 from "../../assets/images/Clients/client2.png";
import client3 from "../../assets/images/Clients/client3.png";
import client4 from "../../assets/images/Clients/client4.png";
import client5 from "../../assets/images/Clients/client5.png";
import client6 from "../../assets/images/Clients/client6.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Customers = () => {
  return (
    <section id="customers_section">
      <div className="inner_content flex">
        <div className={`${styles.customer_img} `}>
          <img src={customer_img} alt="Customer Image" />
        </div>
        <div className={`${styles.customer_details} `}>
          <h2 data-aos="fade-down">Tim Smith</h2>
          <small>Brithis Dragon Boat Association</small>
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.{" "}
          </p>
          <div className={`${styles.customer_icons} ${styles.flex}`}>
            {[client1, client2, client3, client4, client5, client6].map(
              (client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                />
              )
            )}
            <button data-aos = "fade-left" className={styles.meet_customers_btn}>
              Meet all customers{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
