import React, { useState, useEffect } from "react";
import axiosInstance from "../api/api";
import Product from "./Product";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectAllProducts, getSearchStatus } from "../store/searchSlice";
import ProductsSkeleton from "./ProductsSkeleton";
import ReactPaginate from 'react-paginate';
import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const { categoryId } = useParams();

  console.log("cat ID", categoryId);

  const searchProducts = useSelector(selectAllProducts);
  const searchStatus = useSelector(getSearchStatus);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res;
        if (categoryId) {
          res = await axiosInstance.get(`products/category/${categoryId}`);
          setProducts(res.data);
        } else {
          res = await axiosInstance.get("products");
          setProducts(res.data.data);
        }
        
        setLoading(false);
      } catch (error) {
        console.log("Error in products fetching", error);
      }
    };
    fetchProduct();
  }, [categoryId]);
console.log('myProducts',products);
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

  const displayedProducts =
    searchStatus === "succeeded" && searchProducts.length > 0
      ? searchProducts
      : products;

  const noSearchResults =
    searchStatus === "succeeded" && searchProducts.length === 0;

  // Pagination logic
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = displayedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(displayedProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % displayedProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="products flex flex-wrap justify-center gap-2 p-[20px] rounded-md">
        {noSearchResults ? (
          <h2>Search Product is not Available 🙂</h2>
        ) : (
          currentItems.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
      {displayedProducts.length > itemsPerPage && ( <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
      />)}
    </>
  );
};

export default Products;
