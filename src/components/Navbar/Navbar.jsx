import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import SearchFilter from "./SearchFilter";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { favorites } = useFavorites();
  const { cart } = useShoppingCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          SOLENIA
        </Link>
      </div>

      <div className="hamburger-container" onClick={toggleMenu}>
        <div className="hamburger-icon">
          <i className={showMenu ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
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

        <Link to="/favorites" className="nav-icon favorites-icon">
          <i className="fa fa-heart"></i>
          {favorites.length > 0 && (
            <span className="favorites-count">{favorites.length}</span>
          )}
        </Link>

        <Link to="/shoppingcart" className="nav-icon cart-icon">
          <i class="fa-solid fa-bag-shopping"></i>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </div>

      {/* SEARCH BAR (separate component) */}
      {showSearch && (
        <SearchFilter
          showSearch={showSearch}
          onCloseSearch={handleCloseSearch}
        />
      )}

      {showMenu && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link
                to="/womens-clothing"
                className="nav-link-mobile"
                onClick={toggleMenu}
              >
                WOMEN
              </Link>
            </li>
            <li>
              <Link
                to="/mens-clothing"
                className="nav-link-mobile"
                onClick={toggleMenu}
              >
                MEN
              </Link>
            </li>
            <li>
              <Link
                to="/jewelery"
                className="nav-link-mobile"
                onClick={toggleMenu}
              >
                JEWELERY
              </Link>
            </li>
          </ul>
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

        <Link to="/shoppingcart" className="nav-icon cart-icon">
          <i class="fa-solid fa-bag-shopping"></i>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
