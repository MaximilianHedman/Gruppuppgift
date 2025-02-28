import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="home">
      <section className="hero">
        <h1>STYLE THAT LASTS DESIGNED FOR YOU</h1>
        <p>Carefully curated products for a modern lifestyle.</p>
      </section>

      <section className="categories">
        {["women", "men", "jewelery"].map((category) => (
          <div key={category} className="category-container">
            <h3 className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <button
              className={`category-item ${category}`}
              onClick={() => handleCategoryClick(category)}
            ></button>
          </div>
        ))}
      </section>

      <section className="middle-part">
        <h2>SOPHISTICATED MINIMALISTIC TIMELESS</h2>
        <p>Style meets innovation. Fashion designed for modern living.</p>
      </section>

      <section className="jewelry">
        <div className="image-section"></div>
        <div className="text-section">
          <h3>Jewelry that completes your look. Subtle yet unforgettable.</h3>
          <button className="learn-more">LEARN MORE</button>
        </div>
      </section>

      <section className="reviews">
        <h3>Trusted by Thousands of Happy Customers</h3>
        <p>Here´s what our costumers say about us.</p>
        {[
          {
            id: 1,
            text: "Wow... I am very happy to buy this product...",
            rating: "4.5 ",
          },
          { id: 2, text: "Amazing quality and fast delivery!", rating: "5 " },
          {
            id: 3,
            text: "The best purchase I have ever made!",
            rating: "4.8 ",
          },
        ].map((review) => (
          <div key={review.id} className="review">
            <p>{review.text}</p>
            <span>{review.rating}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
