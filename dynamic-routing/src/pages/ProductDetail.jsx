import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const [singleProductData,setSingleProductData]=useState({})
    console.log(singleProductData);
    
    let {id}=useParams()
    let getSingleProductData=async()=>{
        try {
         let res=await axios.get(`https://fakestoreapi.com/products/${id}`)   
        setSingleProductData(res.data)
        } catch (error) {
           console.log("Detail api error",error);
        }
    }
    useEffect(()=>{
        getSingleProductData()
    },[])
  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">

  <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

    {/* Product Image */}
    <div className="bg-gray-100 flex items-center justify-center p-10">
      <img
        src={singleProductData.image}
        alt={singleProductData.title}
        className="w-full max-w-md h-[450px] object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Product Information */}
    <div className="p-8 md:p-12 flex flex-col justify-center">

      {/* Category */}
      <p className="uppercase tracking-widest text-sm text-gray-500 font-semibold mb-3">
        {singleProductData.category}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
        {singleProductData.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-yellow-500 text-xl">
          ★
        </span>

        <span className="font-semibold">
          {singleProductData.rating?.rate}
        </span>

        <span className="text-gray-500">
          ({singleProductData.rating?.count} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-4xl font-bold text-gray-900 mb-6">
        ${singleProductData.price}
      </p>

      <div className="border-t border-gray-200 mb-6"></div>

      {/* Description */}
      <p className="text-gray-600 leading-7 mb-8">
        {singleProductData.description}
      </p>

      {/* Quantity */}
      <div className="flex items-center gap-4 mb-6">

        <span className="font-semibold">
          Quantity
        </span>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

          <button className="px-4 py-2 text-lg hover:bg-gray-100">
            -
          </button>

          <span className="px-5 py-2 border-x border-gray-300">
            1
          </span>

          <button className="px-4 py-2 text-lg hover:bg-gray-100">
            +
          </button>

        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4">

        <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>

        <button className="flex-1 border border-black py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
          Buy Now
        </button>

      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">

        <div className="text-center">
          <div className="text-xl mb-1">🚚</div>
          <p className="text-xs font-semibold">Free Delivery</p>
        </div>

        <div className="text-center">
          <div className="text-xl mb-1">↩️</div>
          <p className="text-xs font-semibold">30 Days Return</p>
        </div>

        <div className="text-center">
          <div className="text-xl mb-1">🔒</div>
          <p className="text-xs font-semibold">Secure Payment</p>
        </div>

      </div>

    </div>

  </div>

</div>
  )
}

export default ProductDetail