import Footer from "../Pages/Footer/Footer";
import Connect from "../Pages/Get/Get";
import Header from "../Pages/Header/header";
import Hero from "../Pages/Hero/Hero";
import Logos from "../Pages/Logos/Logos";
import Remo from "../Pages/Remo/Remo";
import Text from "../Pages/Text/Text";
import Think from "../Pages/Think/Think";
import Used from "../Pages/Used/Used";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Text />
            <Think />
            <Remo />
            <Used />
            <Logos />
            <Connect />
            <Footer />
        </>
    )
}

export default Home;