import React from "react";
import { CgProfile } from "react-icons/cg";
import { logout } from "../store/authSlice";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ setProfileDropdown, isGoogleUser }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (isGoogleUser) {
      window.open("http://localhost:8000/auth/logout", "_self");
    } else {
      dispatch(logout());
    }
  };

  return (
    <>
      <div
        className="proBackFall"
        onClick={() => setProfileDropdown(false)}
      ></div>

      <div className="profileDropwdown absolute top-[30px] right-[0px] flex flex-col gap-[7px] bg-white shadow-custom w-[150px] p-[10px_0px] rounded-sm">
        <Link>
          <div className="profileContent flex items-center pl-[10px] gap-2">
            <CgProfile className="profileIcon" />
            <span>User Profile</span>
          </div>
        </Link>
        <div
          className="logoutProfile cursor-pointer flex items-center pl-[10px] gap-2"
          onClick={handleLogout}
        >
          <MdOutlineLogout className="logoutIcon" />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
