import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="first">
          <img src={logo} alt="logo" />
          <p>
            Discover endless possibilities with our curated collection of
            premium products. Shop confidently for quality and style. Your
            satisfaction is our priority.
          </p>
        </div>
        <div className="sec">
          <h3>Menus</h3>
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About US</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
            <li>
              <Link href="">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="third">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link href="">Electronics</Link>
            </li>
            <li>
              <Link href="">Beauty & Cosmetics</Link>
            </li>
            <li>
              <Link href="">Clothes</Link>
            </li>
            <li>
              <Link href="">Flowers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="socailLinks">
        <div className="facebook">
          <FaFacebookF />
        </div>
        <div className="twitter">
          <FaTwitter />
        </div>
        <div className="instagram">
          <FaInstagram />
        </div>
      </div>
      <div className="copyright text-center p-5">
        All rights reserved By Shuaib Khan | {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default React.memo(Footer);
