import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import AppRoutes from './routes/AppRoutes'
import { MyStore } from './context/MyContext'
import axios from 'axios'
const App = () => {
 
  return (
    <div className='flex flex-col gap-4'>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App