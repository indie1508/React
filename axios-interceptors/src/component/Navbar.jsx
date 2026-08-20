import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='p-3 border-r border-gray-500 flex flex-col gap-10 justify-between'>
       <div className='flex flex-col gap-10'>
             <h1 className='text-4xl font-semibold'>E-commercre</h1>
        <div className='flex flex-col gap-4 ml-5 '>
            <NavLink className={({isActive})=>
                isActive?"font-semibold text-red-500 border-b border-gray-500":"text-black border-b border-gray-500"} to={'/main'} end>Home</NavLink>
            <NavLink className={({isActive})=>
                isActive?"font-semibold text-red-500 border-b border-gray-500":"text-black border-b border-gray-500"}  to={'/main/users'}>Users</NavLink>
            <NavLink className={({isActive})=>
                isActive?"font-semibold text-red-500 border-b border-gray-500":"text-black border-b border-gray-500"}  to={'/main/products'}>Products</NavLink>
        </div>
       </div>

        <button
        onClick={()=>{
            localStorage.removeItem("loggedinUser")
            return <Navigate to={"/"}/>
        }}
        className='py-3 p-4 bg-red-600 text-white rounded cursor-pointer'>
            LogOut
        </button>
    </div>
  )
}

export default Navbar