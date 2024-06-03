import React, { lazy } from "react";
const BottomHeader = lazy(() => import("./BottomHeader"));
const TopHeader = lazy(() => import("./TopHeader"));
const Header = () => {
  return (
    <>
      <div className="header flex flex-col bg-white border-b-[1px] border-[#ddd]">
        <TopHeader />
        <BottomHeader />
      </div>
    </>
  );
};

export default React.memo(Header);
