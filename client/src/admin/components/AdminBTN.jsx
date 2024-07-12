import React from 'react'
import { Link } from 'react-router-dom'
const AdminBTN = ({link, title}) => {
  return (
    <div className='bg-[#1d2327] w-[100vw] text-white'>
        <Link to={link}>{title}</Link>
    </div>
  )
}

export default AdminBTN