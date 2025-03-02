import  { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false); // State för att visa/dölja sökfält

  // Funktion för att toggla sökfältets visning
  const handleSearchClick = () => {
    setShowSearch(!showSearch); // Växlar mellan att visa och dölja sökfältet
  };

  // Funktion för att stänga sökfältet
  const handleCloseSearch = () => {
    setShowSearch(false); // Döljer sökfältet
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">SOLENIA</Link>
      </div>

      {/* Kategorier på vänster sida (Desktop) */}
      <ul className={`nav-links-desktop ${showSearch ? "hidden" : ""}`}>
        <li><Link to="/womens-clothing" className="nav-link">WOMEN</Link></li>
        <li><Link to="/mens-clothing" className="nav-link">MEN</Link></li>
        <li><Link to="/jewelery" className="nav-link">JEWELERY</Link></li>
      </ul>

      {/* Ikoner på höger sida (Desktop) */}
      <div className={`nav-icons-desktop ${showSearch ? "hidden" : ""}`}>
        <span
          className={`nav-icon search ${showSearch ? "hidden" : ""}`}
          onClick={handleSearchClick}
        >
          <i className="fa fa-search"></i>
        </span>
        <Link to="/favorites" className="nav-icon"><i className="fa fa-heart"></i></Link>
        <Link to="/shoppingcart" className="nav-icon"><i className="fa fa-shopping-cart"></i></Link>
      </div>

      {/* Sökfält (Desktop och mobil) */}
      {showSearch && (
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <span className="close-search" onClick={handleCloseSearch}>
            <i className="fa fa-times"></i>
          </span>
        </div>
      )}

      {/* Ikoner för mobil */}
      <div className={`nav-icons-mobile ${showSearch ? "hidden" : ""}`}>
        <Link to="/" className="nav-icon"><i className="fa fa-home"></i></Link>
        <span className="nav-icon" onClick={handleSearchClick}><i className="fa fa-search"></i></span>
        <Link to="/favorites" className="nav-icon"><i className="fa fa-heart"></i></Link>
        <Link to="/shoppingcart" className="nav-icon"><i className="fa fa-shopping-cart"></i></Link>
      </div>
    </nav>
  );
};

export default Navbar;





















