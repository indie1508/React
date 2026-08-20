import React from 'react'

const Usercard = ({user,deleteUser,ind,setupdatedData,setToggle}) => {
  
  
  return (
    <div className='p-4 border rounded flex flex-col gap-4 bg-gray-600'>
      <div className='h-40 w-40'>
        <img  className='object-cover h-full w-full rounded-xl'
        src={user.image} alt="" />
      </div>
      <div className='flex flex-col gap-1 text-white'>
        <h1>{user.name}</h1>
        <h1 className='text-sm'>{user.email}</h1>
        <h1 className='text-sm'>{user.number}</h1>
      </div>
      <div className='flex justify-between'>
        <button onClick={()=>{
          setupdatedData(user)
          setToggle((prev)=>!prev)
        }} className='bg-yellow-700 text-white rounded py-2 px-3'>Update</button>
        <button onClick={()=>deleteUser(ind)} className='bg-red-700 text-white rounded py-2 px-3'>Delete</button>
      </div>
    </div>
  )
}

export default Usercard
