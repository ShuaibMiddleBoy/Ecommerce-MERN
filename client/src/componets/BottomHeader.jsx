import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomHeader = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottomHeader">
      <div className="left">
        <ul>
          <li>
            <Link
              to={"/featured_selections"}
              className={`${isActive("/featured_selections") ? "active" : ""}`}
            >
              Featured selections
            </Link>
          </li>
          <li>
            <Link
              to={"/trade_assurance"}
              className={`${isActive("/trade_assurance") ? "active" : ""}`}
            >
              Trade Assurance
            </Link>
          </li>
          <li>
            <Link
              to={"/help_center"}
              className={`${isActive("/help_center") ? "active" : ""}`}
            >
              Help Center
            </Link>
          </li>
          <li>
            <Link
              to={"/become_a_supplier"}
              className={`${isActive("/become_a_supplier") ? "active" : ""}`}
            >
              Become a Supplier
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li disabled>
            <Link to={"/"} className={`${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/products"}
              className={`${isActive("/products") ? "active" : ""}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={`${isActive("/about") ? "active" : ""}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={`${isActive("/contact") ? "active" : ""}`}
            >
              Contact US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(BottomHeader);
