import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesSection.css";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === "women") {
      navigate("/womens-clothing");
    } else if (category === "men") {
      navigate("/mens-clothing");
    } else if (category === "jewelery") {
      navigate("/jewelery");
    }
  };

  return (
    <>
      <div className="categories-h2">
        <h2>CATEGORIES</h2>
      </div>

      <section className="categories">
        {["women", "jewelery", "men"].map((category) => (
          <div key={category} className="category-container">
            <button
              className={`category-item ${category}`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default CategoriesSection;