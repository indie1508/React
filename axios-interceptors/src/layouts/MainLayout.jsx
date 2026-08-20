import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='h-screen p-2   grid grid-cols-[1fr_5fr]'>
      <Navbar/>
      <div className='h-full px-2 overflow-auto'>
         <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout