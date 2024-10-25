
import styles from "./Blogs.module.css";
import blog_img1 from "../../assets/images/blog/blog_img1.png";
import blog_img2 from "../../assets/images/blog/blog_img2.jpg";
import blog_img3 from "../../assets/images/blog/blog_img3.jpg";
import blog_img4 from "../../assets/images/blog/blog_img4.jpg";
import blog_img5 from "../../assets/images/blog/blog_img5.jpg";
import blog_img6 from "../../assets/images/blog//blog_img6.png";

import { FaArrowRightLong } from "react-icons/fa6";


const blogs = [
  {
    id: 1,
    img: blog_img1,
    title: "AI and Everyday Life: Practical Applications You Didn’t Know About",
  },
  {
    id: 2,
    img: blog_img2,
    title: "AI and Everyday Life: Practical Applications You Didn’t Know About",
  },
  {
    id: 3,
    img: blog_img3,
    title: "AI and Everyday Life: Practical Applications You Didn’t Know About",
  },
  {
    id: 4,
    img: blog_img4,
    title: "AI and Everyday Life: Practical Applications You Didn’t Know About",
  },
  {
    id: 5,
    img: blog_img5,
    title: "AI and Everyday Life: Practical Applications You Didn’t Know About",
  },
  {
    id: 6,
    img: blog_img6,
    title: "AI and Everyday Life: Practical Applications You Didn’t Know About",
  },
];

const Blogs = () => {
  return (
    <section id="blog_section" className={styles.blogSection}>
      <div className={styles.blog_container}>
        <div className="inner_content">
       

       
          <div className={styles.blog_header_title}>
            <h1>Recently Published Blogs</h1>
            <p>
              The Nextcent blog is the best place to read about the latest
              membership insights, trends, and more. See who's joining the
              community, read about how our community is increasing their
              membership income, and much more.
            </p>
          </div>
          <div className={`${styles.flex} ${styles.blogs}`}>
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.single_blog}>
                <div className={styles.blog_img}>
                  <img src={blog.img} alt={`Blog ${blog.id}`} />
                </div>
                <div className={styles.blog_title}>
                  <h4>{blog.title}</h4>
                  <button className={styles.btn}>
                    Read More  <span><FaArrowRightLong /></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className={`${styles.btn} ${styles.more_blogs_btn}`}>
            Read More Blogs <span><FaArrowRightLong /></span>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Blogs;
