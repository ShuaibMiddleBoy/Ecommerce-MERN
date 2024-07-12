import React, { useState, useEffect } from "react";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Tooltip from "./Tooltip";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { totalQuantity } from "../store/cartSlice";
import Search from "./Search";
import UserImg from "../assets/user.png";
import { CiLock } from "react-icons/ci";
import ProfileDropdown from "./ProfileDropdown";
import ProductCatMenu from "./ProductCatMenu";
import AdminBTN from "../admin/components/AdminBTN";

const Header = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const itemsTotalQuantity = useSelector(totalQuantity);
  const [googleUserData, SetGoogleUserData] = useState(null);
  const [mobCatDropdown, setMobCatDropdown] = useState(false);
  const [setMobMenuDropdown] = useState(false);
  const profileDropdownToggle = () => setProfileDropdown((prev) => !prev);
  const mobCatDropdownToggle = () => setMobCatDropdown((prev) => !prev);
  const mobMenuDropdownToggle = () => setMobMenuDropdown((prev) => !prev);
  const [categories, setCategories] = useState([
    { name: "Electronics", showSubCat: false },
    { name: "Clothes", showSubCat: false },
    { name: "Beauty & Cosmetics", showSubCat: false },
  ]);

  const [userRole, setUserRole] = useState(0);
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('user'));
    setUserRole(userData?.role);
  
},[])

  const handleMouseEnter = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showSubCat = true;
    setCategories(updatedCategories);
  };

  const handleMouseLeave = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].showSubCat = false;
    setCategories(updatedCategories);
  };

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
    <>
      <div className="header hidden lg:flex flex-col bg-white border-b-[1px] border-[#ddd] ">
      {userRole ===  1 &&   <AdminBTN link = '/dashboard' title="Dashboard" />}
        <TopHeader />
        <BottomHeader />
      </div>

      <div className="header flex lg:hidden flex-col gap-3 bg-white border-b-[1px] border-[#ddd] py-2 px-5 pt-6">
        <div className="flex justify-between">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="logo" width={"50px"} />
            </Link>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="header_cart relative">
              <Tooltip content="Cart" direction="top">
                <Link to="/cart" className="inline-block text-xl ">
                  <IoCartOutline />
                  {itemsTotalQuantity > 0 ? (
                    <span className="totalQuantity absolute top-[-6px] left-[15px] bg-[#fc4a22] w-[15px] text-white h-[15px] flex rounded-xl items-center justify-center text-[10px]">
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
                          googleUserData?.image
                            ? googleUserData?.image
                            : UserImg
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
                    <button className="flex items-center transition-all duration-500 outline-none py-[5px] px-3 text-xl">
                      <CiLock></CiLock>
                    </button>
                  </Link>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
        {/* here will be search comp */}
        <div className="text-center relative">
          <Search />
        </div>
        <div className="flex justify-between items-center">
          <div className="relative">
            <button
              onClick={mobCatDropdownToggle}
              className="flex font-medium items-center transition-all duration-500 outline-none bg-[#fc4a22] text-white gap-2 border rounded-md border-[#fc4a22] py-[5px] px-3"
            >
              <span className="text-2xl pt-[2px]">
                <FiAlignJustify />
              </span>
              Category
            </button>
            {mobCatDropdown && (
              <div
                className="categories absolute z-50 bg-white
               flex flex-col p-[10px] gap-[5px]"
              >
                <ProductCatMenu />
              </div>
            )}
          </div>

          <div>
            <div>
              <button
                onClick={mobMenuDropdownToggle}
                className="text-xl font-semibold flex items-center transition-all duration-500 outline-none text-[#54595f] gap-2"
              >
                <span className="text-2xl pt-1">
                  <FiAlignJustify />
                </span>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header
