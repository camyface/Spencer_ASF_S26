import MyNavbar from "./components/Navbar.jsx";
import HeroVideo from "./components/HomePageComponents/HeroVideo.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection from "./components/HomePageComponents/HomeSection.jsx";
import HomeSections from "./components/HomePageComponents/HomeSectionCards.jsx";
import HomeSectionCards from "./components/HomePageComponents/HomeSectionCards.jsx";


const App = () => {
    return (
        <>
            <MyNavbar></MyNavbar>
            <HeroVideo/>
                <HomeSectionCards></HomeSectionCards>
        </>
    )
}

export default App;