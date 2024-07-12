import React, { useState, useEffect } from "react";
import axiosInstance from "../api/api";
import Product from "./Product";
import ProductsSkeleton from "./ProductsSkeleton";


const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchProduct = async () => {
            try {
                const res = await axiosInstance.get("products");
                setProducts(res.data.data.slice(0,4));
                setLoading(false)
            } catch (error) {
                console.log("Error in products fetching", error);
            }
        }
        fetchProduct()
    },[])
    if (loading) {
        return (
          <div className="products flex flex-wrap justify-center m-auto gap-2 p-[20px] rounded-md">
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
          </div>
        );
      }

  return (
    <div className="products flex flex-wrap justify-center gap-2 p-[20px] rounded-md">
    {products.map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
  )
}

export default HomeProducts