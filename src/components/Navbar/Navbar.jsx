import { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";

// Import product data & API service
import productService from "../../services/productService"; // Ensure correct path
import { productData } from "../../data/productData";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const { favorites } = useFavorites();

  // Fetch products from API on mount
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await productService.getProducts();
        setFetchedProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchAllProducts();
  }, []);

  // Toggle search bar visibility
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm("");
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchTerm("");
  };

  // Filter `productData` based on search term
  const filteredProducts = Object.entries(productData).filter(([id, item]) => {
    if (!searchTerm) return false;

    const searchLower = searchTerm.toLowerCase();
    const matchesColor = item.colors.some((color) =>
      color.toLowerCase().includes(searchLower)
    );
    const matchesSize = item.sizes.some((size) =>
      size.toLowerCase().includes(searchLower)
    );

    return matchesColor || matchesSize;
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          SOLENIA
        </Link>
      </div>

      {/* Desktop Navigation Links */}
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

      {/* Desktop Icons */}
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
        <Link to="/shoppingcart" className="nav-icon">
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </div>

      {/* Search Bar & Results */}
      {showSearch && (
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by color or size..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="close-search" onClick={handleCloseSearch}>
            <i className="fa fa-times"></i>
          </span>

          {/* Display filtered products with images */}
          {searchTerm && filteredProducts.length > 0 && (
            <ul className="search-results-list">
              {filteredProducts.map(([id, item]) => {
                const numericId = parseInt(id, 10);
                const apiProduct = fetchedProducts.find(
                  (p) => p.id === numericId
                );

                return (
                  <li key={id} className="search-item">
                    {/* Display product image */}
                    {apiProduct && (
                      <img
                        src={apiProduct.image}
                        alt={apiProduct.title}
                        className="search-item-image"
                      />
                    )}
                    <div className="search-item-info">
                      <strong>
                        {apiProduct?.title || `Product ID: ${id}`}
                      </strong>
                      <br />
                      <strong>Colors:</strong> {item.colors.join(", ")}
                      <br />
                      <strong>Sizes:</strong> {item.sizes.join(", ")}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {/* No results message */}
          {searchTerm && filteredProducts.length === 0 && (
            <div className="no-results">No matching products</div>
          )}
        </div>
      )}

      {/* Mobile Icons */}
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
        <Link to="/shoppingcart" className="nav-icon">
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
