import React from "react";
import MainSlider from "./MainSlider";
import ProductCatMenu from "./ProductCatMenu";

const HeroSection = () => {
  return (
    <div className="heroSection relative flex justify-between width-[100%] ">
      <div className="hidden lg:block productCatMenu w-[25%] m-[20px] rounded-md bg-white">
        <h2 className="bg-[#ff5733] text-white rounded-[3px_3px_0_0] p-[10px] tracking-wide font-bold uppercase">
          Categories
        </h2>
        <ProductCatMenu />
        <div />
      </div>
      <MainSlider />
    </div>
  );
};

export default React.memo(HeroSection);
