import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { useShoppingCart } from "../../context/ShoppingCartContext"; // Import ShoppingCart Context
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { favorites } = useFavorites();
  const { cart } = useShoppingCart(); // Get cart from context
  // Calculate total number of items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  const handleCloseSearch = () => {
    setShowSearch(false);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          SOLENIA
        </Link>
      </div>
      <ul className={`nav-links-desktop ${showSearch ? "hidden" : ""}`}>
        <li>
          <Link to="/womens-clothing" className="nav-link">
            WOMEN
          </Link>
        </li>
        <li>
          <Link to="/mens-clothing" className="nav-link">
            MEN
          </Link>
        </li>
        <li>
          <Link to="/jewelery" className="nav-link">
            JEWELERY
          </Link>
        </li>
      </ul>
      <div className={`nav-icons-desktop ${showSearch ? "hidden" : ""}`}>
        <span
          className={`nav-icon search ${showSearch ? "hidden" : ""}`}
          onClick={handleSearchClick}
        >
          <i className="fa fa-search"></i>
        </span>
        {/* Favorites Icon with Counter */}
        <Link to="/favorites" className="nav-icon favorites-icon">
          <i className="fa fa-heart"></i>
          {favorites.length > 0 && (
            <span className="favorites-count">{favorites.length}</span>
          )}
        </Link>
        {/* Shopping Cart Icon with Counter */}
        <Link to="/shoppingcart" className="nav-icon cart-icon">
          <i className="fa fa-shopping-cart"></i>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </div>
      {showSearch && (
        <div className="search-input-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <span className="close-search" onClick={handleCloseSearch}>
            <i className="fa fa-times"></i>
          </span>
        </div>
      )}
      <div className={`nav-icons-mobile ${showSearch ? "hidden" : ""}`}>
        <Link to="/" className="nav-icon">
          <i className="fa fa-home"></i>
        </Link>
        <span className="nav-icon" onClick={handleSearchClick}>
          <i className="fa fa-search"></i>
        </span>
        <Link to="/favorites" className="nav-icon favorites-icon">
          <i className="fa fa-heart"></i>
          {favorites.length > 0 && (
            <span className="favorites-count">{favorites.length}</span>
          )}
        </Link>
        {/* Shopping Cart Icon with Counter for Mobile */}
        <Link to="/shoppingcart" className="nav-icon cart-icon">
          <i className="fa fa-shopping-cart"></i>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;