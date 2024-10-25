
import { useEffect } from 'react';
import Home from './Pages/HomePage/Home';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, 
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;