import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
