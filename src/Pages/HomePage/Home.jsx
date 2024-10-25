
import styles from "./Home.module.css";
import NavBar from '../../Component/NavBar/NavBar';
import Hero from '../../Component/Hero/Hero';
import Community from "../../Component/Community/Community";
import Clients from "../../Component/Clients/Clients";
import Unlock from "../../Component/Unlock/Unlock";
import Achievements from "../../Component/Achievements/Achievements";
import Calender from "../../Component/Calender/Calender";
import Customers from "../../Component/Customers/Customers";
import Blogs from "../../Component/Blogs/Blogs";
import Subscribe from "../../Component/Subscribe/Subscribe";
import Footer from "../../Component/Footer/Footer";
const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Clients />
            <Community />
            <Unlock />
            <Achievements />
            <Calender />
            <Customers />
            <Blogs />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;