
import styles from "./Home.module.css";
import NavBar from '../../Component/NavBar/NavBar';
import Hero from '../../Component/Hero/Hero';
import Community from "../../Component/Community/Community";
import Clients from "../../Component/Clients/Clients";
import Unlock from "../../Component/Unlock/Unlock";
import Achievements from "../../Component/Achievements/Achievements";
const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Clients />
            <Community />
            <Unlock />
            <Achievements />
        </div>
    );
};

export default Home;