import React from "react";
import "./ProductCard.css";
import HeartIcon from "./HeartIcon";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="product-card" onClick={() => onProductClick(product.id)}>
      <div className="icons">
        <HeartIcon />
        <svg
          className="shopping-bag"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          viewBox="0 0 448 512"
        >
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
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
