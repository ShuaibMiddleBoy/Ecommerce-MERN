import React, { Suspense, lazy, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { totalQuantity } from "../store/cartSlice";
const Search = lazy(() => import("./Search"));
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import {
  FaArrowAltCircleRight,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import UserImg from "../assets/user.png";
import Tooltip from "./Tooltip";
import ProfileDropdown from "./ProfileDropdown";

const TopHeader = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const itemsTotalQuantity = useSelector(totalQuantity);
  const [googleUserData, SetGoogleUserData] = useState(null);

  const profileDropdownToggle = () => setProfileDropdown((prev) => !prev);

  useEffect(() => {
    const getGoogleUser = async () => {
      try {
        const res = await fetch("http://localhost:8000/auth/login/success", {
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        SetGoogleUserData(data.user);
      } catch (error) {}
    };
    getGoogleUser();
  }, []);

  return (
    <div className="topHeader flex justify-center items-center py-[20px] px-[40px]">
      <div className="header_logo flex">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={"80px"} />
        </Link>
      </div>

      <div className="header_search relative m-auto">
        <Suspense fallback={<h2>Loading..</h2>}>
          <Search />
        </Suspense>
      </div>

      <div className="flex gap-10 items-center">
        <div className="header_cart relative">
          <Tooltip content="Cart" direction="top">
            <Link to="/cart" className="inline-block text-xl">
              <IoCartOutline />
              {itemsTotalQuantity > 0 ? (
                <span className="totalQuantity absolute top-[-10px] left-[20px] bg-[#fc4a22] w-[18px] text-white h-[18px] flex rounded-xl items-center justify-center text-[14px]">
                  {itemsTotalQuantity}
                </span>
              ) : (
                ""
              )}
            </Link>
          </Tooltip>
        </div>

        <div className="header_user relative">
          {isAuthenticated || googleUserData ? (
            <>
              <Tooltip content="User setting" direction="top">
                <button onClick={profileDropdownToggle}>
                  <img
                    src={
                      googleUserData?.image ? googleUserData?.image : UserImg
                    }
                    alt="userImage"
                    className="block w-6 h-6 rounded-2xl"
                  />
                </button>
              </Tooltip>
              {profileDropdown && (
                <ProfileDropdown isGoogleUser={!!googleUserData} />
              )}
            </>
          ) : (
            <Tooltip content="Login" direction="top">
              <Link to="/login" className="inline-block">
                <button className="flex items-center transition-all duration-500 outline-none hover:bg-[#fc4a22] hover:text-white gap-5 border rounded-md border-[#fc4a22] py-2 px-5">
                  Login <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </button>
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(TopHeader);
