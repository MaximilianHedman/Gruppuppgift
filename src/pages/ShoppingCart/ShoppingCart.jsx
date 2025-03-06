import React, { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cart, updateCartQuantity, removeFromCart } = useShoppingCart();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    name: "",
    lastname: "",
    address: "",
    email: "",
    zipcode: "",
    city: "",
    phone: "",
  });

  const handleQuantityChange = (id, delta) => {
    const item = cart.find((product) => product.id === id);
    if (!item) return;
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateCartQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  const handleInputChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/thank-you-card");
  };

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="shoppingcart-container">
      <h4>Checkout Page</h4>
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="product-price">
                Price: ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))
        )}
        <div className="total-price">
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      </div>

      <div className="order-form">
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-group">
              <h5>First name:</h5>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={order.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <h5>Last name:</h5>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                value={order.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <h5>Address:</h5>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={order.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="zip-city-container">
              <div className="form-group">
                <h5>Zip code:</h5>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter your zip code"
                  value={order.zipcode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <h5>City:</h5>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={order.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <h5>Email:</h5>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={order.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <h5>Phone number:</h5>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={order.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="checkout-btn-container">
            <button type="submit" className="checkout-button">
              CHECK OUT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCart;