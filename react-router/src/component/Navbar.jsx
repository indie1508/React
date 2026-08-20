import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
   <nav className='flex item-center justify-between mb-4'>
        <h1>logo</h1>
        <div className='flex items-center gap-10 justify-between'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
          <button>Login</button>
    </nav>
  )
}

export default Navbar