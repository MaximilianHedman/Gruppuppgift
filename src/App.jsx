import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import MensClothing from "./pages/MensClothing/MensClothing";
import Jewelery from "./pages/Jewelery/Jewelery";
import ProductDetailsPages from "./pages/ProductDetailsPage/ProductDetailsPage";
import Favorites from "./pages/Favorites/Favorites";
import ThankYouCard from "./pages/ThankYouCard/ThankYouCard";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer/Footer";

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
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/thank-you-card' element={<ThankYouCard />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App