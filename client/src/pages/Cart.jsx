import React from "react";
import CartItems from "../componets/CartItems";
import { useSelector } from "react-redux";
import { totalPrice } from "../store/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axiosInstance from "../api/api";
const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const TotalPrice = useSelector(totalPrice);

  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    const body = {
      products: carts,
    };
    const res = await axiosInstance.post("/create-checkout-session", body);
    const session = res.data;

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="cart">
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>

          {carts.map((cart) => (
            <CartItems key={cart._id} cart={cart} />
          ))}

          <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9  max-md:text-center max-md:mb-4">
              Subtotal
            </h5>
            <div className="flex items-center justify-between gap-5 ">
              <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
                Promo Code?
              </button>
              <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
                RS {TotalPrice}
              </h6>
            </div>
          </div>
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
              Shipping taxes, and discounts calculated at checkout
            </p>
            <button
              onClick={makePayment}
              className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 "
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Cart);
