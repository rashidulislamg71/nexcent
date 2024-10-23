
import client1 from "../../assets/images/Clients/client1.png";
import client2 from "../../assets/images/Clients/client2.png";
import client3 from "../../assets/images/Clients/client3.png";
import client4 from "../../assets/images/Clients/client4.png";
import client5 from "../../assets/images/Clients/client5.png";
import client6 from "../../assets/images/Clients/client6.png";

import styles from "./Clients.module.css";

const Clients = () => {
    return (
        <section className={styles.clients_section} id={styles.clients_section}>
        <div className={`${styles.clients_inner_content}`}>
          <div className={styles.clients_title}>
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients.</p>
          </div>
          <div className={`${styles.clients} ${styles.flex}`}>
            {[client1, client2, client3, client4, client5, client6].map(
              (client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </section>
    );
};

export default Clients;