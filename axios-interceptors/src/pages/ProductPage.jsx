import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { axiosInstance } from '../config/axiosInstance'
const ProductPage = () => {
   const [productData,setProductData]=useState([])
   let getProductData=async()=>{
      try {
        let res=await axiosInstance('/products')
        console.log(res);
       setProductData(res.data)  
    } catch (error) {
        console.log('error',error);
      }
   }

   useEffect(()=>{
    getProductData()
   },[])
  return (
    <div className='grid grid-cols-4 gap-4'>
        {
            productData.map((val)=>(
            <ProductCard key={val.id} product={val}/>
        ))
        }
    </div>
  )
}

export default ProductPage