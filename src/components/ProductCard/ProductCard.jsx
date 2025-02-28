import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onProductClick }) => {
  const [liked, setLiked] = useState(false);
  const handleHeartClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card" onClick={() => onProductClick(product.id)}>
      <div className="icons-container">
        <div className="heart-icon-container">
          <button className="heartFavour" onClick={handleHeartClick}>
            <i className={`fa-heart ${liked ? "fa-solid" : "fa-regular"}`}></i>
          </button>
        </div>
        <button className="shopping-container">
          <span className="add-to-cart-text">ADD TO CART</span>
          <i className="fa fa-shopping-bag"></i>
        </button>
      </div>

      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="title">{product.title}</p>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
