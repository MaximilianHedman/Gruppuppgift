import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={() => { }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;