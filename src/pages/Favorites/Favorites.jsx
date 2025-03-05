import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page-wrapper">
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="product-container">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
