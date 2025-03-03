import React, { useState } from "react";
import { useFavorites } from "../../context/FavoritesContext"; // Import Favorites Context
import "./ProductCard.css";

const ProductCard = ({ product, onProductClick }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const [liked, setLiked] = useState(isFavorite);

  const handleHeartClick = (e) => {
    e.stopPropagation(); // Prevents triggering onProductClick
    setLiked(!liked);
    toggleFavorite(product);
  };

  return (
    <div className="card" onClick={() => onProductClick(product.id)}>
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

      <div className="card-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-info">
        <p className="title">{product.title}</p>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
