import Intro from "../Components/Home/Intro";
import { HomeSection } from "../Components/Home/HomeComponents";
import About from "../Components/Home/About";

const Home = () => {
    return (
        <HomeSection>
            <Intro />
            <About />
        </HomeSection>
    );
}

export default Home;