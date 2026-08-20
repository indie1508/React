import React from 'react'
import { useState } from 'react'

const Register = ({setToggle,setUsers}) => {
    const [formData,setformData]=useState({})//Yha credential mein hm empty object bnaayenge aur jb form mein
    //  data aayege toh woh key-value pair ke according set ho jaayega
    
    const handleChange=(e)=>{
          let {name,value}=e.target
          setformData({...formData,[name]:value})
     }
     const handleSubmit=(e)=>{
           e.preventDefault()
           console.log(formData);
           setUsers((prev)=>[...prev,formData])
           setformData({
            name:"",
            email:"",
            password:""
           })

     }
    return (
    <div className='bg-white p-6 rounded-xl flex flex-col gap-4'>
        <h1>Register</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input 
          required
           value={formData.name}
           name='name'
           onChange={handleChange} 
           type="name" 
           className='p-2  border border-gray-400 rounded'
           placeholder='Name'/>
        <input
          required
         value={formData.email}
        name='email'
        onChange={handleChange} 
        type="email" 
        className='p-2  border border-gray-400 rounded' 
        placeholder='Email'/>
        <input 
        required
        value={formData.password}
        name='password'
        onChange={handleChange} 
        type="password"
        className='p-2 border border-gray-400 rounded' 
        placeholder='Password'/>
        <input 
        required
        value={formData.image}
        name='image'
        onChange={handleChange} 
        type="url"
        className='p-2 border border-gray-400 rounded' 
        placeholder='Image'/>
        <button className='p-2 bg-blue-600 rounded-2xl text-white'>Register</button>
      </form>
      <p>Already have an Account <span onClick={()=>{
        setToggle(prev=>!prev)
      }} className='text-blue-500 cursor-pointer'>Login Here</span></p>
    </div>
  )
}

export default Register
