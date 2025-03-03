// Filters.jsx
import React, { useState } from "react";
import "./SearchFilter.css";

export const productData = {
  1: { color: "Blue", color1: "Red", color2: "Black", size: "One Size" },
  2: {
    color: "Silver",
    color1: "Blue",
    sizeS: "S",
    sizeM: "M",
    sizeL: "L",
    sizeXl: "XL",
  },
  3: {
    color: "Gold",
    color1: "Blue",
    color2: "Black",
    color3: "Orange",
    sizeM: "M",
    sizeL: "L",
    sizeXl: "XL",
  },
  4: {
    color: "Purple",
    color1: "Blue",
    color2: "Black",
    color3: "Orange",
    sizeXs: "XS",
    sizeS: "S",
    sizeM: "M",
    sizeL: "L",
    sizeXl: "XL",
  },
  5: { color: "Silver", size: "25" },
  6: { color: "White-Gold", size: "10" },
  7: { color: "White-Gold", size: "15" },
  8: { color: "Gold", size: "10" },
  15: {
    color: "Purple",
    color1: "Blue",
    color2: "Rosa",
    color3: "Orange",
    sizeXs: "XS",
    sizeS: "S",
    sizeM: "M",
    sizeL: "L",
    sizeXl: "XL",
  },
  16: {
    color: "White",
    color1: "Black",
    color2: "Rosa",
    sizeM: "M",
    sizeS: "S",
  },
  17: { color2: "Rosa", color4: "Red", sizeM: "M", sizeL: "L", sizeXl: "XL" },
  18: {
    color: "White",
    color1: "Blue",
    color2: "Rosa",
    color3: "Blue",
    color4: "Red",
    sizeXs: "XS",
    sizeS: "S",
    sizeM: "M",
    sizeL: "L",
    sizeXl: "XL",
  },
  19: {
    color: "White",
    color2: "Black",
    color4: "Red",
    sizeXs: "XS",
    sizeS: "S",
    sizeM: "M",
  },
  20: {
    color: "White",
    color1: "Blue",
    color2: "Rosa",
    color3: "Blue",
    sizeS: "S",
    sizeM: "M",
    sizeL: "L",
    sizeXl: "XL",
  },
};

function Filters() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Collect color & size values
  const colorSet = new Set();
  const sizeSet = new Set();

  Object.values(productData).forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (key.toLowerCase().includes("color")) {
        colorSet.add(item[key]);
      }
      if (key.toLowerCase().includes("size")) {
        sizeSet.add(item[key]);
      }
    });
  });

  const allColors = Array.from(colorSet);
  const allSizes = Array.from(sizeSet);

  // Filter logic
  const filteredProducts = Object.entries(productData).filter(([id, item]) => {
    const matchesColor =
      !selectedColor ||
      Object.keys(item).some(
        (key) =>
          key.toLowerCase().includes("color") && item[key] === selectedColor
      );

    const matchesSize =
      !selectedSize ||
      Object.keys(item).some(
        (key) =>
          key.toLowerCase().includes("size") && item[key] === selectedSize
      );

    return matchesColor && matchesSize;
  });

  // Decide whether to show the list
  const isFilterActive = selectedColor !== "" || selectedSize !== "";

  return (
    <div className="filters-container">
      {/* Filter by color */}
      <div className="filter-section">
        <label htmlFor="colorFilter" className="filter-label">
          Filter by color:
        </label>
        <select
          id="colorFilter"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">All</option>
          {allColors.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by size */}
      <div className="filter-section">
        <label htmlFor="sizeFilter" className="filter-label">
          Filter by size:
        </label>
        <select
          id="sizeFilter"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">All</option>
          {allSizes.map((sz) => (
            <option key={sz} value={sz}>
              {sz}
            </option>
          ))}
        </select>
      </div>

      {/* Only show results if user selects something */}
      {isFilterActive && (
        <ul className="filtered-product-list">
          {filteredProducts.map(([id, item]) => (
            <li key={id}>
              <strong>Product ID:</strong> {id} |<strong> Colors:</strong>{" "}
              {Object.entries(item)
                .filter(([key]) => key.toLowerCase().includes("color"))
                .map(([_, value]) => value)
                .join(", ")}
              {" | "}
              <strong>Sizes:</strong>{" "}
              {Object.entries(item)
                .filter(([key]) => key.toLowerCase().includes("size"))
                .map(([_, value]) => value)
                .join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filters;
