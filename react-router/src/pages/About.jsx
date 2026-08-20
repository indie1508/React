import React from 'react'
import { NavLink,Outlet, useNavigate } from 'react-router'

export const About = () => {
    let navigate=useNavigate()
  return (
    <div>
        <h1>This is about</h1>
        {/* M-1 to navigate using Navlink */}
       {/* <NavLink to={'/about/nested'}>Nested ko dikhao</NavLink> */}
       {/* M-2 to navigate using useNavigate hook */}
       <button onClick={()=>navigate('/about/nested')}>Nested ko dikhao</button>
        <Outlet/>
    </div>
  )
}
