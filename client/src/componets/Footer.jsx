import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Tooltip from "./Tooltip";
function navigate(url) {
  window.location.href = url;
}

const Footer = () => {
  return (
    <div className="footer mt-auto bg-white border-t-[1px] border-[#ddd]">
      <div className="footerContent grid grid-cols-3 p-[20px]">
        <div className="first p-[20px 40px]">
          <img src={logo} alt="logo" className="w-[100px] text-[#54595f]" />
          <p>
            Discover endless possibilities with our curated collection of
            premium products. Shop confidently for quality and style. Your
            satisfaction is our priority.
          </p>
        </div>
        <div className="justify-self-center">
          <h3 className="font-semibold">Menus</h3>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                About US
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="third justify-self-center">
          <h3 className="font-semibold">Categories</h3>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Beauty & Cosmetics
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Clothes
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="transition-all duration-500 ease-in-out hover:text-[#fc4a22]"
              >
                Flowers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="socailLinks flex mb-[20px] justify-center items-center gap-[20px]">
        <Tooltip content="Go to our facebook page">
          <div className="facebook w-[30px] h-[30px] flex justify-center items-center cursor-pointer border-2 border-[#ff5733] rounded-2xl transition-all duration-500 ease-in-out  hover:bg-[#ff5733] hover:text-white">
            <FaFacebookF />
          </div>
        </Tooltip>
        <Tooltip content="Go to our twitter account">
          <div className="twitter w-[30px] h-[30px] flex justify-center items-center cursor-pointer border-2 border-[#ff5733] rounded-2xl transition-all duration-500 ease-in-out  hover:bg-[#ff5733] hover:text-white">
            <FaTwitter />
          </div>
        </Tooltip>
        <Tooltip content="Go to our instagram account">
          <div className="instagram w-[30px] h-[30px] flex justify-center items-center cursor-pointer border-2 border-[#ff5733] rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#ff5733] hover:text-white">
            <FaInstagram />
          </div>
        </Tooltip>
      </div>
      <div className="copyright text-center p-5">
        All rights reserved By Shuaib Khan | {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default React.memo(Footer);
