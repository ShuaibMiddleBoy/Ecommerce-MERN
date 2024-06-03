import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../store/searchSlice";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => dispatch(fetchSearchResults(searchKey));

  return (
    <>
      <input
        className="w-[550px] border-solid border-[1px] border-[#ADACAC] rounded-md h-[46px] pl-[10px] pr-[100px] outline-none focus:border-solid focus:divide-[#fc4a22] focus:border-2"
        type="text"
        placeholder="Search here.."
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button
        type="button"
        className="absolute top-[4px] left-[458px] bg-[#ff5733] text-white p-[7px_20px] rounded-md hover:bg-[#fc4a22]"
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};

export default React.memo(Search);
