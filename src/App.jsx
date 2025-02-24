import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Jewelery from "./pages/Jewelery/Jewelery";
import MensClothing from "./pages/MensClothing/MensClothing";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/store' element={<Store />} />
                <Route path='/jewelery' element={<Jewelery />} />
                <Route path='/mens-clothing' element={<MensClothing />} />
                <Route path='/womens-clothing' element={<WomensClothing />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default App
