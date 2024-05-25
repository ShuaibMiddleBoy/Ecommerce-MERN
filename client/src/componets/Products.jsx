import React, { Suspense, lazy } from "react";
const Product = lazy(() => import("./Product"));

const Products = () => {
  return (
    <Suspense callfack={<h2>Loading..</h2>}>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Suspense>
  );
};

export default React.memo(Products);
