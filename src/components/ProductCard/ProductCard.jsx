import React, { useState } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./ProductCard.css";

const ProductCard = ({ product, onProductClick, hideInfo = false, variant = "default" }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useShoppingCart();
  const isFavorite = favorites.some((fav) => fav.id === product.id);
  const [liked, setLiked] = useState(isFavorite);
  const handleHeartClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    toggleFavorite(product);
  };
  const handleCartClick = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className={`product-card ${variant === "details" ? "product-card-details" : ""}`} onClick={() => onProductClick(product.id)}>
      <div className="icons-container">
        {/* Favorite Heart */}
        <div className="heart-icon-container">
          <button className="heartFavour" onClick={handleHeartClick}>
            <i className={`fa-heart ${liked ? "fa-solid" : "fa-regular"}`}></i>
          </button>
        </div>
        {/* Shopping Cart Button */}
        <button className="shopping-container" onClick={handleCartClick}>
          <span className="add-to-cart-text">ADD TO CART</span>
          <i className="fa fa-shopping-bag"></i>
        </button>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      {!hideInfo && (
        <div className="product-info">
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;