import React from "react";
import { CgProfile } from "react-icons/cg";
import { logout } from "../store/authSlice";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ setProfileDropdown }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        className="proBackFall"
        onClick={() => setProfileDropdown(false)}
      ></div>

      <div className="profileDropwdown">
        <Link>
          <div className="profileContent ">
            <CgProfile className="profileIcon" />
            <span>User Profile</span>
          </div>
        </Link>
        <div className="logoutProfile cursor-pointer " onClick={handleLogout}>
          <MdOutlineLogout className="logoutIcon" />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
