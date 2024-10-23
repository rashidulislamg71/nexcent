
import styles from "./Home.module.css";
import NavBar from '../../Component/NavBar/NavBar';
import Hero from '../../Component/Hero/Hero';
import Community from "../../Component/Community/Community";
import Clients from "../../Component/Clients/Clients";
import Unlock from "../../Component/Unlock/Unlock";
import Achievements from "../../Component/Achievements/Achievements";
import Calender from "../../Component/Calender/Calender";
import Customers from "../../Component/Customers/Customers";
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
        </div>
    );
};

export default Home;