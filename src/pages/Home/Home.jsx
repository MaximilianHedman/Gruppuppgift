import React from "react";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === "women") {
      navigate("/womens-clothing");
    } else if (category === "men") {
      navigate("/mens-clothing");
    } else if (category === "jewelery") {
      navigate("/jewelery");
    }
  };

  const handleLearnMoreClick = () => {
    navigate("/jewelery");
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>SOLENIA</h1>

        <h2>TIMELESS PIECES THAT COMBINE CLASSIC AND MODERN DESIGNS</h2>

        <p>
          Essentials that combine style and function perfect for the demands of
          everyday life.
        </p>
      </section>

      <div className="categories-h2">
        <h2>CATEGORIES</h2>
      </div>

      <section className="categories">
        {["women", "jewelery", "men"].map((category) => (
          <div key={category} className="category-container">
            <button
              className={`category-item ${category}`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
            </button>
          </div>
        ))}
      </section>

      <section className="middle-part">
        <h2>SOPHISTICATED. MINIMALISTIC. TIMELESS.</h2>

        <p>Style meets innovation. Fashion designed for modern living.</p>
      </section>

      <section className="jewelry">
        <div className="image-section"></div>

        <div className="text-section">
          <h3>
            Our jewelry collection adds the perfect touch to your look. Subtle
            yet unforgettable details that elevate your style.
          </h3>

          <button className="learn-more" onClick={handleLearnMoreClick}>
            LEARN MORE
          </button>
        </div>
      </section>
      <section className="reviews">
        <h3>Trusted by Thousands of Happy Customers</h3>

        <h4>
          Real experiences and real voices. See what our customers say about
          SOLENIA!
        </h4>

        {[
          {
            id: 1,
            name: "Jenny L.",
            text: "I absolutely love the quality of the fabrics! Highly recommend!",
            rating: 4,
          },
          {
            id: 2,
            name: "James R.",
            text: "The shirts are stylish and the fit is just right. Great!",
            rating: 4.5,
          },
          {
            id: 3,
            name: "Zara M.",
            text: "Beautiful and delicate pieces! I bought a ring. Love it!",
            rating: 5,
          },
        ].map((review, index) => {
          const fullStars = Math.floor(review.rating); // Antal hela stjärnor
          const halfStar = review.rating % 1 !== 0; // Om det finns en halv stjärna

          return (
            <div key={review.id} className={`review review-${index + 1}`}>
              <div className="review-image"></div>

              <div className="review-content">
                <span className="review-rating">
                  <span className="review-name">{review.name}</span>
                  <span className="stars">
                    {Array(fullStars)
                      .fill()
                      .map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    {halfStar && <i className="fa-solid fa-star-half-alt"></i>}
                  </span>
                </span>

                <p className="review-text">{review.text}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
