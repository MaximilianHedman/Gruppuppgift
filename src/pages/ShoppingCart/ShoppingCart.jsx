import React, { useState} from 'react';
import "./ShoppingCart.css";
//behöver jag en fil för shopping cart och en egen för inputfältet ''dina uppgifter''?
//behöver jag importera useState och useEffect i så fall?

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
    setCart (
      cart.map((item)=>
        item.id === id ? {...item, quantity: Math.max(1,item.quantity +delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleInputChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Order submitted:", order);
    alert("Thank you for your purchase!");
  };

  //const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-image"></div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)}><i class="fa-solid fa-minus"></i></button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className="price">Price: {item.price}€</div>
            <button className="remove-button" onClick={() => handleRemove(item.id)}><i class="fa-solid fa-xmark"></i></button>
          </div>
        ))}
      </div>

      <div className="order-form">
        <h2>Shipping Information</h2>
        <form className="form-container" onSubmit={handleSubmit}>
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
          <div className="form-group-zip">
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
          <div className="form-group-city">
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
        </form>
        <button type="submit" className="checkout-button">CHECK OUT</button>
      </div>
    </div>
  );
};

export default ShoppingCart;