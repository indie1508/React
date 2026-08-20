import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Cart = () => {
    let {cartItems}=useContext(MyShop)
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8 text-center">
        🛒 My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <h2 className="text-2xl font-semibold text-gray-500">
            Your Cart is Empty 😢
          </h2>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 flex gap-6 hover:shadow-xl transition"
            >

              {/* Image */}
              <div className="w-36 h-36 bg-gray-100 rounded-lg flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-28 object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">

                <div>
                  <span className="text-xs uppercase bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {item.category}
                  </span>

                  <h2 className="text-xl font-bold mt-2 line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">

                  <div className="flex items-center gap-3">
                    <span className="bg-yellow-400 px-2 py-1 rounded text-sm font-semibold">
                      ⭐ {item.rating.rate}
                    </span>

                    <span className="text-gray-500 text-sm">
                      ({item.rating.count} Reviews)
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-green-600">
                    ${item.price}
                  </h2>

                </div>

              </div>

              {/* Remove Button */}
              <div className="flex items-center">
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
                  Remove
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default Cart