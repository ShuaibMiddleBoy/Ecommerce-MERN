import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomHeader = () => {
  const location = useLocation();
  const [isSticky , setIsSticky] = useState(false);

  useEffect(()=>{

    const handleScroll = () => {
      if(window.scrollY > 400){
      setIsSticky(true)
      }else{
        setIsSticky(false)
      }
    }


window.addEventListener('scroll', handleScroll)

return () => {
  window.removeEventListener("scroll", handleScroll)
}
  })

 

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bottomHeader flex justify-between items-center p-[0px_60px_10px_20px] ${isSticky ? "sticky top-0 bg-white z-50 shadow-md" : ""}`}>
      <div className="left ">
        <ul className="flex gap-[30px] text-[#222]">
          <li>
            <Link
              to={"/featured_selections"}
              className={`${
                isActive("/featured_selections") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22] pointer-events-none`}
            >
              Featured selections
            </Link>
          </li>
          <li>
            <Link
              to={"/trade_assurance"}
              className={`${
                isActive("/trade_assurance") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22] pointer-events-none`}
            >
              Trade Assurance
            </Link>
          </li>
          <li>
            <Link
              to={"/help_center"}
              className={`${
                isActive("/help_center") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22] pointer-events-none`}
            >
              Help Center
            </Link>
          </li>
          <li>
            <Link
              to={"/become_a_supplier"}
              className={`${
                isActive("/become_a_supplier") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22] pointer-events-none`}
            >
              Become a Supplier
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="flex gap-[30px] text-[#222]">
          <li disabled>
            <Link
              to={"/"}
              className={`${
                isActive("/") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22]`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/products"}
              className={`${
                isActive("/products") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22]`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={`${
                isActive("/about") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22]`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={`${
                isActive("/contact") ? "active" : ""
              } transition-all duration-300 ease-in-out hover:text-[#fc4a22] `}
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
