import { useState, useEffect } from "react";
import "./SearchFilter.css"; // Separate CSS file for search filter styling
import { productData } from "../../data/productData";
import productService from "../../services/productService";

const SearchFilter = ({ showSearch, onCloseSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await productService.getProducts();
        setFetchedProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchAll();
  }, []);

  // Filter local productData by color/size as user types
  const filteredProducts = Object.entries(productData).filter(([id, item]) => {
    if (!searchTerm) return false;

    const colorSizeValues = Object.keys(item)
      .filter(
        (key) =>
          key.toLowerCase().includes("color") ||
          key.toLowerCase().includes("size")
      )
      .map((key) => String(item[key]).toLowerCase());

    return colorSizeValues.some((val) =>
      val.includes(searchTerm.toLowerCase())
    );
  });

  if (!showSearch) return null;

  return (
    <div className="sf-input-container">
      <div className="sf-input-wrapper">
        <input
          type="text"
          className="sf-input"
          placeholder="Search by color or size..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="sf-close-search" onClick={onCloseSearch}>
          <i className="fa fa-times"></i>
        </span>
      </div>

      {searchTerm && filteredProducts.length > 0 && (
        <ul className="sf-results-list">
          {filteredProducts.map(([id, item]) => {
            const numericId = parseInt(id, 10);
            const apiProduct = fetchedProducts.find((p) => p.id === numericId);
            return (
              <li key={id} className="sf-item">
                <div className="sf-item-info">
                  <strong>{apiProduct?.title || `Product ID: ${id}`}</strong>
                  <br />
                  <strong>Colors:</strong>{" "}
                  {Object.entries(item)
                    .filter(([key]) => key.toLowerCase().includes("color"))
                    .map(([_, val]) => val)
                    .join(", ")}
                  <br />
                  <strong>Sizes:</strong>{" "}
                  {Object.entries(item)
                    .filter(([key]) => key.toLowerCase().includes("size"))
                    .map(([_, val]) => val)
                    .join(", ")}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {searchTerm && filteredProducts.length === 0 && (
        <div className="sf-no-results">No matching products</div>
      )}
    </div>
  );
};

export default SearchFilter;
