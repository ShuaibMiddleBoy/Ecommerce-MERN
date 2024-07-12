import React from "react";
import Products from "../componets/Products";
import HeroSection from "../componets/HeroSection";
import HomeProducts from "../componets/HomeProducts";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <HomeProducts/>
    </div>
  );
};

export default Home;
