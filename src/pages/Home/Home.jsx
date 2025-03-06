import React from "react";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import CategoriesSection from "../../components/Home/CategoriesSection/CategoriesSection";
import MiddleSection from "../../components/Home/MiddleSection/MiddleSection";
import JewelrySection from "../../components/Home/JewelrySection/JewelrySection";
import ReviewsSection from "../../components/Home/ReviewsSection/ReviewsSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <CategoriesSection />
      <MiddleSection />
      <JewelrySection />
      <ReviewsSection />
    </div>
  );
};

export default Home;