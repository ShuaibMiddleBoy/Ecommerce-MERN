import React from "react";

const Skeleton = ({ width, height, variant }) => {
  const style = {
    width,
    height,
  };
  return <span className={`skeleton ${variant}`} style={style}></span>;
};

export default React.memo(Skeleton);
