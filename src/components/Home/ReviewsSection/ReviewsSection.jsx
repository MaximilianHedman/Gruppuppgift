import React from "react";
import { reviewData } from "../../../data/reviewData";
import "./ReviewsSection.css";

const ReviewsSection = () => {
    return (
        <section className="reviews">
            <h3>Trusted by Thousands of Happy Customers</h3>
            <h4>
                Real experiences and real voices. See what our customers say about
                SOLENIA!
            </h4>

            {reviewData.map((review, index) => {
                const fullStars = Math.floor(review.rating);
                const halfStar = review.rating % 1 !== 0;

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
    );
};

export default ReviewsSection;