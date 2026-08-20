import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 text-white bg-gray-950 flex items-center justify-between rounded'>
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className='flex gap-6 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={()=>setToggle((prev)=>!prev)} className='p-2 bg-blue-700 rounded cursor-pointer '>Create User</button>
    </div>
  )
}

export default Navbar
