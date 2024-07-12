import { useForm } from "react-hook-form";
import axiosInstance from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const AddProduct = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [categories, setCategories] = useState([]);


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

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("productTitle", data.productTitle);
    formData.append("productPrice", data.productPrice);
    formData.append("productImage", data.productImage[0]);
    formData.append("productDesc", data.productDesc);
    formData.append("productCategory", data.productCategory);
    try {
      const res = await axiosInstance.post("/products/add", formData, {
        headers: { "Content-type": "multipart/form-data" },
      });
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Error in adding product. Please try again.");
      console.log("Error in adding a product", error);
    }
  };
  return (
    <div className="addProduct">
      <form
        className="max-w-md bg-white p-5 m-5 rounded mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center mb-5 font-bold text-gray-700 text-lg">
          Add Product
        </h1>
        <div className="mb-5">
          <label
            htmlFor="ProductTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Title
          </label>
          <input
            type="text"
            {...register("productTitle", {
              required: "Product title is required",
            })}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-black-400 text-black-400"
          />
          <span className="text-[#FF9494] block text-sm h-[25px] w-[100%]">
            {errors.productTitle?.message}
          </span>
        </div>
        <div className="mb-5">
          <label
            htmlFor="ProductPrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Price (pkr)
          </label>
          <input
            type="number"
            {...register("productPrice", {
              required: "Product price is required",
            })}
            placeholder="write product price"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-black-400 text-black-400"
          />
          <span className="text-[#FF9494] block text-sm h-[25px] w-[100%]">
            {errors.productPrice?.message}
          </span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="ProductImage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Image
          </label>
          <input
            type="file"
            {...register("productImage", {
              required: "Product image is required",
            })}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-black-400 text-black-400"
          />
          <span className="text-[#FF9494] block text-sm h-[25px] w-[100%]">
            {errors.productImage?.message}
          </span>
        </div>
        <div className="mb-5">
          <label
            htmlFor="ProductDesc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Description
          </label>
          <textarea
            rows={4}
            {...register("productDesc", {
              required: "Product Description is required",
            })}
            placeholder="write product description"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-black-400 text-black-400"
          />
          <span className="text-[#FF9494] block text-sm h-[25px] w-[100%]">
            {errors.productDesc?.message}
          </span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="ProductCategory"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Category
          </label>
          <select
            {...register("productCategory", {
              required: "Product category is required",
            })}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-black-400 text-black-400 "
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <span className="text-[#FF9494] block text-sm h-[25px] w-[100%]">
            {errors.productCategory?.message}
          </span>
        </div>

        <button
          type="submit"
          className="text-white bg-[#ff5733] hover:bg-[#fc4a22] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
