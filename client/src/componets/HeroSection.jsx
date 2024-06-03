import React from "react";
import MainSlider from "./MainSlider";
import ProductCatMenu from "./ProductCatMenu";

const HeroSection = () => {
  return (
    <div className="heroSection relative flex justify-between width-[100%] h-[470px]">
      <ProductCatMenu />
      <MainSlider />
    </div>
  );
};

export default React.memo(HeroSection);
