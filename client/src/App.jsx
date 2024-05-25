import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      { path: "/contact", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
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
