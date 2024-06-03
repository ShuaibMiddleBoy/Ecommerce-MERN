import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProduct from "./componets/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import PaymentSuccess from "./pages/PaymentSuccess";
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Layout = lazy(() => import("./layouts/Layout"));
const Login = lazy(() => import("./componets/Login"));
const Signup = lazy(() => import("./componets/Signup"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/add_product", element: <AddProduct /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  { path: "/success", element: <PaymentSuccess /> },
]);

const App = () => {
  return (
    <Suspense fallback={<h2>Loading..</h2>}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default React.memo(App);
