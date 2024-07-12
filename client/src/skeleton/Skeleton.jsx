import React from 'react'
import "./skeleton.css";

const Skeleton = ({width, height, variant}) => {
  const style = {
    width,
    height
  }
  return (
    <span className={`skeleton ${variant}`} style={style}></span>
  )
}

export default Skeleton