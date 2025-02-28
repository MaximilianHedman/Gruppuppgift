import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="product-card" onClick={() => onProductClick(product.id)}>
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <p>{product.title}</p>
      </div>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
