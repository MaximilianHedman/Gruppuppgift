import React from "react";
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
    <div className="product-card" onClick={() => onProductClick(product.id)}>
      <div className="icons">
        <HeartIcon />

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

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductCard;