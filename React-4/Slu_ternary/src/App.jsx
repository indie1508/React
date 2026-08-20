import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import { useState } from 'react'
import Usercard from './component/Usercard'
const App = () => {
  const [toggle,setToggle]=useState(false)
  const [users,setUsers]=useState([])
  return (
    <div className='bg-gray-50 h-screen flex justify-center items-center '>
      {toggle? 
       (
        users.map((elem,index)=>(
          <Usercard key={index} user={elem}/>
        ))
       ):
       ( 
       <Register setToggle={setToggle} setUsers={setUsers}/>
       )
       }
    </div>
  )
}

export default App
