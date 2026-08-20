import React, { useState } from 'react'

const BruteForce = () => {
    const [name,setName]=useState("")
    console.log(name);
    
    
  return (
    <div>
      <div className='flex flex-col gap-2'>
      <input type="text" placeholder='Name' className='border-2' onChange={(e)=>{
        setName(e.target.value)
        console.log(name);
      }}/>
      <h1>This is {name}</h1>
      <button>Submit</button>
    </div>
    </div>
  )
}

export default BruteForce
