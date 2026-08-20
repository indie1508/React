import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Usercard from './component/Usercard'
import Form from './component/Form'

const App = () => {
  const [toggel,setToggle]=useState(false)
  const[users,setUsers]=useState(()=>{
    return JSON.parse(localStorage.getItem("users"))||[]
  })
  const deleteUser=(id)=>{
          console.log("id->",id);
      let filterUser=users.filter((val,index)=>{
           return index!==id
      })
      console.log(filterUser);
      setUsers(filterUser)
      localStorage.setItem('users',JSON.stringify(filterUser))
  }
  // To update the data  of the users
const [updatedData,setupdatedData]=useState(null)
console.log("app mein hoon",updatedData);

  return (
    <div className='p-4 flex  flex-col gap-4'>
      <Navbar setToggle={setToggle}/>
      {
        toggel?(<div className='flex gap-2'>
        {users.map((elem,index)=>{
          return <Usercard 
          setupdatedData={setupdatedData}
          setToggle={setToggle}
          key={index} 
          ind={index}
          user={elem} 
          deleteUser={deleteUser}/>
        })}
      </div>):(<div className='flex justify-center  items-center'>
        <Form
        updatedData={updatedData} 
        users={users} 
        setUsers={setUsers} 
        setToggle={setToggle}/>
      </div>)
      }
    </div>
  )
}

export default App
