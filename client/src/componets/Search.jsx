import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../store/searchSlice";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch(fetchSearchResults(searchKey));
    navigate("/products");
  };

  return (
    <>
      <input
        className="w-[100%] border-solid border-[1px] border-[#e2e2e2] rounded-md h-[42px] pl-[10px] pr-[100px] outline-none focus:border-2"
        type="text"
        placeholder="Search here.."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button
        type="button"
        className="absolute top-[5px] right-[5px] bg-[#111111] text-white p-[8px_18px] rounded-md hover:bg-[#54595f]"
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </>
  );
};

export default Search
