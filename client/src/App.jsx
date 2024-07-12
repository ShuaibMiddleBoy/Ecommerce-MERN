import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";
import PaymentSuccess from "./pages/PaymentSuccess";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layouts/Layout";
import Login from "./componets/Login";
import Signup from "./componets/Signup";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import UserProfile from "./pages/UserProfile";
import Protected from "./componets/Protected";

// Admin Routes 
import AddProduct from "./admin/components/AddProduct";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardProducts from "./admin/components/Products";
import Users from "./admin/components/Users";
import Main from "./admin/pages/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      {  path:"/products/:categoryId?", element: < Products/>},
      {path:"/user_profile", element: <UserProfile/>},
      { path: "/contact", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "*", element: <ErrorPage /> },

     
    ],
  },
  {
    path:"/dashboard",
    element: <Protected component={DashboardLayout}/>,
    children : [
      { path: "/dashboard", element: <Protected component={Main}/> },
      { path: "/dashboard/add_product", element: <Protected component={AddProduct}/> },
      { path: "/dashboard/products", element: <Protected component={DashboardProducts}/> },
      { path: "/dashboard/users", element: <Protected component={Users}/> },
    ]
  },
  { path: "/success", element: <PaymentSuccess /> },
]);



const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
