import React from 'react'
import Header from '../admin/components/Header'
import Sidebar from '../admin/components/Sidebar'
import Footer from '../admin/components/Footer'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
   
        <Header/>

        <div className='grid min-h-[calc(100vh-90px)]' style={{gridTemplateColumns:"180px 85%", }}>
            <div className='bg-white border'>
        <Sidebar/>
        </div>
            <div className=''>
        <Outlet/>
        </div>

        </div>
        <div className='mt-auto bg-gray-400 h-[30px]'>
        <Footer />
        </div>
    </div>
  )
}

export default DashboardLayout