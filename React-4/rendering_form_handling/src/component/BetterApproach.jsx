import React, { useState } from 'react'

const BetterApproach = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    
    {console.log(formData)}
  return (
    <div>
      <div>
      <div className='flex flex-col gap-2'>
      <input onChange={(e)=>setFormData({...formData,name:e.target.value})} 
       type="text"
       value={formData.name}
       placeholder='Name' 
       className='border-2'/>
      <input onChange={(e)=>setFormData({...formData,email:e.target.value})} 
      type="text" 
      value={formData.email}
      placeholder='Email' 
      className='border-2' />
      <input onChange={(e)=>setFormData({...formData,password:e.target.value})} 
      type="password" 
      value={formData.password}
      placeholder='Password' 
      className='border-2' />
      <h3>this {formData.name}</h3>
      <button onClick={()=>{
        console.log("formData",formData);
        setFormData({
          name:"",
          email:"",
          password:""
        })
      }}>Submit</button>
    </div>
    </div>
    </div>
  )
}

export default BetterApproach
