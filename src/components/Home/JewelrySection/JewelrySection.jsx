import React from "react";
import { useNavigate } from "react-router-dom";
import "./JewelrySection.css";

const JewelrySection = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate("/jewelery");
    };

    return (
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
    );
};

export default JewelrySection;