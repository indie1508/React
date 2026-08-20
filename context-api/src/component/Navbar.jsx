import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {
    let{setIsCartOpen}=useContext(MyShop)
  return (
    <div className='bg-black rounded text-white p-5 h-10 flex items-center justify-between '>
      <div>logo</div>
      <div className='flex gap-10 text-xl'>
        <p
        className='cursor-pointer'
        onClick={()=>setIsCartOpen((false))}
        >Home</p>
        <p className='cursor-pointer'
        onClick={()=>setIsCartOpen((true))}
        >Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
