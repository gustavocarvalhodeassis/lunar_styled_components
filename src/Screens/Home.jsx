import Intro from "../Components/Home/Intro";
import { HomeSection,  } from "../Components/Home/HomeComponents";
import About from "../Components/Home/About";
import SystemImages from "../Components/Home/SystemImages";
import Reports from "../Components/Home/Reports";
import HomeTakePart from "../Components/Home/HomeTakePart";

const Home = () => {
    return (
        <HomeSection>
            <Intro />
            <About />
            <SystemImages />
            <Reports />
            <HomeTakePart />
        </HomeSection>
    );
}

export default Home;