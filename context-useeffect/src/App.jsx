import React, { useContext, useEffect, useState } from 'react'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import { MyStore } from './context/MyContext'

const App = () => {
  let {count,setCount}=useContext(MyStore)
  const [toggle,setToggle]=useState(true)
  useEffect(()=>{
    console.log('app rendering...');  
  },[])
  return (
   <div>
    <h1>Count is {count}</h1>
    <button onClick={()=>(setCount(count++))}>Increment</button>
    <button onClick={()=>setToggle(prev=>!prev)}>Page</button>
    {toggle?<Contact></Contact>:<About></About>}
   </div>
  )
}

export default App