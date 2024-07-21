import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ProductDetailsSkeleton from "../skeleton/components/ProductDetails";
import { loadStripe } from "@stripe/stripe-js";
import UserReview from "../componets/UserReview";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const handleCartToggle = () => {
    dispatch(
      addToCart({
        id: product._id,
        title: product.productTitle,
        price: product.productPrice,
        image: product.productImage,
        quantity,
      })
    );
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Error fetching product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
      
    fetchProduct();
  }, [id]);

  if (loading) return <ProductDetailsSkeleton />;
  if (error) return <h1>{error}</h1>;

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    const body = {
      products: [
        {
          ...product,
          quantity,
        },
      ],
    };

    const res = await axiosInstance.post("/create-checkout-session-single-product/", body);
    const session = res.data;

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });


    if (result.error) {
      console.log(result.error);
    }
  };


  return (
    <>
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block">
        <img
          className="w-full"
          alt="image of a girl posing"
          src={`http://localhost:8000/${product?.productImage}`}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-black-900 ">
            Balenciaga Fall Collection
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-[#54595F]  mt-2">
            {product?.productTitle}
          </h1>
        </div>

        <div>
          <p className=" text-base lg:leading-tight leading-normal text-[#54595F] mt-7">
            {product.productDesc}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 mt-5">
          <div className="flex items-center justify-center">
            <span
              className="border border-gray-400 w-11 flex items-center justify-center h-10 cursor-pointer"
              onClick={handleDecrement}
            >
              -
            </span>
            <input
              type="text"
              value={quantity}
              className="border border-gray-400 w-10 text-center h-10 outline-none"
              readOnly
            />
            <span
              className="border border-gray-400 w-10 flex items-center justify-center h-10 cursor-pointer"
              onClick={handleIncrement}
            >
              +
            </span>
          </div>
          <button
            onClick={handleCartToggle}
            className="outline-none text-base flex items-center justify-center leading-none w-full py-4 bg-[#ff5733] text-white font-semibold hover:bg-[#fc4a22]"
          >
            Add To Cart
          </button>
        </div>
        <button
          className="outline-none text-base flex items-center justify-center leading-none w-full py-4 bg-[#2ebfeb] text-white mt-3 font-semibold hover:bg-[#26ABD4]"
          onClick={makePayment}
        >
          Buy Now
        </button>
        <div></div>
      </div>

    </div>
    <UserReview productId={id} productTitle={product.productTitle} />
    </>
  );
};

export default ProductDetails;
