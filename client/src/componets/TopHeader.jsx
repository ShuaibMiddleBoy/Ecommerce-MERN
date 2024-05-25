import React, { Suspense, lazy, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
const Search = lazy(() => import("./Search"));
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";

import UserImg from "../assets/user.png";
import Tooltip from "./Tooltip";
import ProfileDropdown from "./ProfileDropdown";

const TopHeader = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  const profileDropdownToggle = () => setProfileDropdown((prev) => !prev);

  return (
    <div className="topHeader">
      <div className="header_logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={"80px"} />
        </Link>
      </div>

      <div className="header_search">
        <Suspense fallback={<h2>Loading..</h2>}>
          <Search />
        </Suspense>
      </div>

      <div className="header_cart">
        <Tooltip content="Cart" direction="top">
          <Link to="/cart">
            <IoCartOutline />
          </Link>
        </Tooltip>
      </div>

      <div className="header_user">
        {isAuthenticated ? (
          <>
            <Tooltip content="User setting" direction="top">
              <button onClick={profileDropdownToggle}>
                <img src={UserImg} alt="userImage" className="block w-6 h-6" />
              </button>
            </Tooltip>
            {profileDropdown && <ProfileDropdown />}
          </>
        ) : (
          <Tooltip content="Login" direction="top">
            <Link to="/login">
              <LuLogIn />
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
export default React.memo(TopHeader);
