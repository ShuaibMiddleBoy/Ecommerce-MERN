import React from 'react'
import Skeleton from '../Skeleton'

const ProductDetails = () => {
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
    <div className="xl:w-2/6 lg:w-2/5 w-80 md:block">
   <Skeleton height={'300px'} />
    </div>
    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      <div className="border-b  pb-6">
        <p className="text-sm leading-none text-black-900 ">
          <Skeleton height={"15px"}/>
        </p>
        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-[#54595F]  mt-2">
        <Skeleton height={"30px"}/>
        </h1>
      </div>

      <div>
        <p className=" text-base lg:leading-tight leading-normal text-[#54595F] mt-7">
        <Skeleton height={"60px"}/>
        </p>
       
      </div>
      <div className="flex items-center justify-between gap-2 mt-5">
        <div className="flex items-center justify-center gap-2">
          <span className=" w-11 flex items-center justify-center  h-10 cursor-pointer" >
          <Skeleton height={"30px"}/>
          </span>
          <Skeleton height={"30px"}/>
          <span className=" w-10 flex items-center justify-center h-10 cursor-pointer " >
          <Skeleton height={"30px"}/>
          </span>
        </div>
      <button
        className="outline-none ext-base flex items-center justify-center leading-none w-full py-4 "
      >
       <Skeleton height={"30px"}/>
      </button>
      </div>
      <div>
      
      </div>
    </div>
  </div>
  )
}

export default ProductDetails