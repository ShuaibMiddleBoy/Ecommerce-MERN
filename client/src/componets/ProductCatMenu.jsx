import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/api";

const ProductCatMenu = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories/");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };


    fetchCategories();
  }, []);


  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axiosInstance.get(`/products/category/${categoryId}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }


  const handleMouseEnter = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showSubCat = true;
    setCategories(updatedCategories);
  };

  const handleMouseLeave = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showSubCat = false;
    setCategories(updatedCategories);
  };

  const handleCategoryClick = (category) => {
setSelectedCategory(category)
fetchProductsByCategory(category._id);
  }

  return (

    <div className="categories flex flex-col p-[10px] gap-[5px]">
      {categories?.map((category, index) => (
        <div key={index}>
          {/* Main Category */}
          <div
            className="category inline-block relative text-[#54595f]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
             <Link key={category._id} to={`/products/${category._id}`}>
              {category.name}
            </Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductCatMenu);
