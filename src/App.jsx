import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import MensClothing from "./pages/MensClothing/MensClothing";
import Jewelery from "./pages/Jewelery/Jewelery";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ThankYouCard from "./pages/ThankYouCard/ThankYouCard";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProductDetailsPages from "./pages/ProductDetailsPage/ProductDetailsPage";

const App = () => {

    return (
        <Router>
            <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/womens-clothing' element={<WomensClothing />} />
                    <Route path='/mens-clothing' element={<MensClothing />} />
                    <Route path='/jewelery' element={<Jewelery />} />
                    <Route path='/product/:id' element={<ProductDetailsPages />} />
                    <Route path='/shoppingcart' element={<ShoppingCart />} />
                    <Route path='/thank-you-card' element={<ThankYouCard />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            <Footer />
        </Router>
    )
}

export default App
