import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const Favorites = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="product-container">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={(id) => navigate(`/product/${id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
