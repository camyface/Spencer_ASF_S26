import MyNavbar from "./components/Navbar.jsx";
import HeroVideo from "./components/HomePageComponents/HeroVideo.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSectionCards from "./components/HomePageComponents/HomeSectionCards.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import Home from "./pages/Home.jsx";
import Reservations from "./pages/Reservations.jsx";
import Cart from "./pages/Cart.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
                <Route path={"/reservations"} element={<Reservations/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
            </Routes>


        </BrowserRouter>
    )
}

export default App;