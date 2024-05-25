import React, { Suspense, lazy } from "react";
const Products = lazy(() => import("../componets/Products"));
const HeroSection = lazy(() => import("../componets/HeroSection"));

const Home = () => {
  return (
    <Suspense fallback={<h2>Loading..</h2>}>
      <div className="home">
        <HeroSection />
        <Products />
      </div>
    </Suspense>
  );
};

export default Home;
