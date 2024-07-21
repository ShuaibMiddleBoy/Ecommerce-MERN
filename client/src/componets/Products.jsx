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
  const itemsPerPage = 6;
  const { categoryId } = useParams();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("")

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

  const handleFilter = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;
      if (categoryId) {
        res = await axiosInstance.get(`products/category/${categoryId}`, {
          params: {
            minPrice: minPrice || undefined,
            maxPrice: maxPrice || undefined,
          },
        });
      } else {
        res = await axiosInstance.get("products", {
          params: {
            minPrice: minPrice || undefined,
            maxPrice: maxPrice || undefined,
          },
        });
      }
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in products fetching", error);
      setLoading(false);
    }
  }

  return (

    <div className="flex w-[97%] m-auto my-5 gap-5">
    <div className="filter  w-[300px] h-[500px] bg-white rounded-md flex flex-col gap-2 p-5">

    <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded"
        />

             <button
          onClick={handleFilter}
          className="bg-blue-700 text-white p-2 rounded-sm"
        >
          Apply
        </button>
    </div>
      <div className="products grid grid-cols-3 gap-2 mx-auto rounded-md">
        {noSearchResults ? (
          <h2>Search Product is not Available 🙂</h2>
        ) : (
          currentItems.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
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
      </div>
    </div>
    
  );
};

export default Products;
