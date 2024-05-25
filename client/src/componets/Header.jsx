import React, { lazy } from "react";
const BottomHeader = lazy(() => import("./BottomHeader"));
const TopHeader = lazy(() => import("./TopHeader"));
const Header = () => {
  return (
    <>
      <div className="header">
        <TopHeader />
        <BottomHeader />
      </div>
    </>
  );
};

export default React.memo(Header);
