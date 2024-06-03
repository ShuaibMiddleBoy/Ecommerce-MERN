import React, { useState, useEffect, Suspense, lazy } from "react";
import axiosInstance from "../api/api";
const Product = lazy(() => import("./Product"));
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  getSearchStatus,
  getSearchError,
} from "../store/searchSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchProducts = useSelector(selectAllProducts);
  const searchStatus = useSelector(getSearchStatus);
  // const searchError = useSelector(getSearchError);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get("products");
        setProducts(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error("Failed to fetch products");
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <h2>Loading..</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const displayedProducts =
    searchStatus === "succeeded" && searchProducts.length > 0
      ? searchProducts
      : products;

  return (
    <Suspense callfack={<h2>Loading..</h2>}>
      <div className="products grid grid-cols-4 gap-10 p-[20px] rounded-md">
        {displayedProducts.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </Suspense>
  );
};

export default React.memo(Products);
