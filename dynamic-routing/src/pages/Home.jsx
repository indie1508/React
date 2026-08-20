import React, { useEffect } from 'react'
import { MyStore } from '../context/MyContext'
import { useContext } from 'react'
import axios from 'axios'
import ProductCard from '../component/ProductCard'
const Home = () => {

     let {productsData,setProductData}=useContext(MyStore)
     let getProductsData=async()=>{
    try {
      let res=await axios('https://fakestoreapi.com/products')
      console.log(res.data);
      setProductData(res.data)
      
    } catch (error) {
      console.log('error in api',error);
    }
  }
  useEffect(()=>{
      getProductsData()
  },[])
  return (
    <div className='p-2 grid grid-cols-4'>
        {
            productsData.map((val)=>{
             return <ProductCard key={val.id} product={val}/>   
            })
        }
    </div>
  )
}

export default Home