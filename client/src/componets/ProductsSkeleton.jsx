import React from 'react'
import Skeleton from '../skeleton/Skeleton'

const ProductsSkeleton = () => {
  return (
<div className='flex flex-col m-auto'>
    <div
      className="relative m-auto mt-3 h-[260px] w-[260px] overflow-hidden rounded-xl"
    >
      <Skeleton width={'100%'} height={'260px'}/>
      <span className="absolute top-0 left-0 m-2 rounded-full px-2 text-center text-sm font-medium text-white">
        <Skeleton width={"30px"} height={"10px"}/>
      </span>
    </div>
    <div className=" m-auto  mt-4 px-5 pb-5">
     <Skeleton width={'260px'} height={"25px"}/>
      <div className="mt-2 mb-3 flex items-center justify-between">
        <p>
            <Skeleton width={'190px'} height={'25px'}/>
        </p>
        <div className="flex items-center">
        
          <span className=" rounded  px-2.5 py-0.5 text-xs font-semibold">
            <Skeleton width={'50px'} height={"25px"}/>
          </span>
        </div>
      </div>
      <div
      
        to="/"
        className="flex items-center justify-center rounded-md w-[250px] "
      >
       
       <Skeleton width={'250px'} height={'40px'}/>
      </div>
    </div>
  </div>
  )
}

export default ProductsSkeleton