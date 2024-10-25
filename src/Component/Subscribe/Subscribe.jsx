import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={styles.subscribe_section} id="subscribe_section">
      <div className="inner_content">
        <div className={styles.subscribe_inner_content}>

       
        <h1>Subscribe Now to get blog alerts!</h1>
        <p>
          Stay updated with our latest blog posts, insights, and trends. Don’t
          miss out!
        </p>
        <form className={styles.subscribe_form} action="#" method="post">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className={styles.btn}>
            Subscribe
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
