import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
  <h1>Home</h1>
  <NavLink to={'/home/detail'}></NavLink>
   <Outlet/>
    </div>
  )
}

export default Home