import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const ProductCard = ({ product }) => {
  let {setCartItems}=useContext(MyShop)
    return (
    <div className="w-72 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Product Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-110 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">

        {/* Category */}
        <span className="text-xs uppercase tracking-wider bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded text-sm font-semibold">
            ⭐ {product.rating.rate}
            <span className="text-xs text-gray-700">
              ({product.rating.count})
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">

          <button 
          onClick={()=>setCartItems((prev)=>[...prev,product])}
          className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>

          <button className="w-12 border border-gray-300 rounded-lg hover:bg-red-500 hover:text-white transition">
            ❤
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard