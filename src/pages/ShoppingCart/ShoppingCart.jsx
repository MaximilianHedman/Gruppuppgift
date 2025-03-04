import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "T-shirt", price: 199, quantity: 1 },
    { id: 2, name: "Long sleeve shirt", price: 499, quantity: 1 },
  ]);

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
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleInputChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Order submitted:", order);
    alert("Thank you for your purchase!");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-info">
              <div className="product-image"></div>
              <p>{item.name}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span className="quantity-nr">{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <div className="price">{item.price * item.quantity}€</div>
            <button className="remove-button" onClick={() => handleRemove(item.id)}>X</button>
          </div>
        ))}
        <h3>Total: {totalPrice}€</h3>
      </div>

      <div className="order-form">
        <h2>Shipping Information</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-columns">
            <div className="form-column">
              {["name", "lastname", "email"].map((field) => (
                <div key={field} className="form-group">
                  <h5>{field.charAt(0).toUpperCase() + field.slice(1)}:</h5>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={`Enter your ${field}`}
                    value={order[field]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="form-column">
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
                {["zipcode", "city"].map((field) => (
                  <div key={field} className="form-group form-group-small">
                    <h5>{field.charAt(0).toUpperCase() + field.slice(1)}:</h5>
                    <input
                      type="text"
                      name={field}
                      placeholder={`Enter your ${field}`}
                      value={order[field]}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="form-group">
                <h5>Phone Number:</h5>
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
          </div>

          <button type="submit" className="checkout-button">CHECK OUT</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCart;
