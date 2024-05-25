import React from "react";
import MainSlider from "./MainSlider";
import ProductCatMenu from "./ProductCatMenu";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <ProductCatMenu />
      <MainSlider />
    </div>
  );
};

export default React.memo(HeroSection);
