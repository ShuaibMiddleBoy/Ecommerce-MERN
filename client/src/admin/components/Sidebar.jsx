import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidShoppingBagAlt } from "react-icons/bi"; 
import { HiMiniUsers } from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div>
        <ul className='flex flex-col gap-2 pt-5'>
            <li className='px-3'>
                <Link to={'/dashboard/products'} className='flex items-center gap-1'> <BiSolidShoppingBagAlt /> Products</Link>
            </li>
            <li className='px-3'>
                <Link to={'/dashboard/users'} className='flex items-center gap-1'> <HiMiniUsers /> Users</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar