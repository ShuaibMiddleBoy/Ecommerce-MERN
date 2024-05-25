import React from "react";

const Search = () => {
  return (
    <>
      <input type="text" placeholder="Search here.." />
      <button type="button">Search</button>
    </>
  );
};

export default React.memo(Search);
