import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCards';
import CartScreen from './pages/CartScreen';

const App = () => {
 const [productsData,setProductData]=useState([])
  // console.log(productsData);
 const [cartItems,setCartItems]=useState([])
//  console.log(cartItems);
 
//   console.log(cartItems);
  
 const [isCartOpen,setIsCartOpen]=useState(true) 

const getProduct=async()=>{
    try {
      let res=await axios.get("https://fakestoreapi.com/products")
      console.log(res.data);
      setProductData(res.data)
    } catch (error) {
      console.log("error",error); 
    }
  }
useEffect(()=>{
  getProduct()
},[])

  return (
    <div className='h-screen p-2'>
      <Navbar setIsCartOpen={setIsCartOpen}/>
     {
      isCartOpen? <div className='grid grid-cols-4 gap-4 p-2'>
      {  
        productsData.map((elem)=>{
          let isInCart=cartItems.find((val)=>val.id===elem.id)
         console.log(isInCart);
          return <ProductCard key={elem.id} isInCart={isInCart} product={elem} setCartItems={setCartItems}></ProductCard>
        })
      }
    </div>:
        <div>
      <CartScreen cartItems={cartItems}/>
    </div>
     }
    
    </div>
  )
}

export default App