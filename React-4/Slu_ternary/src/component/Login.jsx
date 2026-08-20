import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className='bg-white p-6 rounded-xl flex flex-col gap-4'>
        <h1>Login</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="email" className='p-2  border border-gray-400 rounded' placeholder='Email'/>
        <input type="password"className='p-2 border border-gray-400 rounded' placeholder='Password'/>
        <button className='p-2 bg-blue-600 rounded-2xl text-white'>Login</button>
      </form>
      <p>Didn't have an Account <span onClick={()=>{
        setToggle(prev=>!prev)
      }} className='text-blue-500 cursor-pointer'>Register Here</span></p>
    </div>
  )
}

export default Login
