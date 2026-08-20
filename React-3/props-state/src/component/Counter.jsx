import React from 'react'

const Counter = () => {
  return (
    <div className='bg-red-600'>
    <h1 className='text-4xl'>Count-{count}</h1>
    <button onClick={()=>{
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
    }}>Increment</button>
    </div>
  )
}

export default Counter
