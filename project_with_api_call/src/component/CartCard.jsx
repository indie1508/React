import React from "react";

const CartCard = ({ cartItems }) => {
    
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <h1 className="text-4xl font-bold text-center mb-10">
        🛒 My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-3xl font-semibold text-gray-500">
            Your Cart is Empty 😢
          </h2>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col gap-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col md:flex-row gap-6"
            >

              {/* Product Image */}
              <div className="w-full md:w-44 h-44 bg-gray-100 rounded-xl flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 object-contain hover:scale-105 transition"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-between">

                <div>

                  <div className="flex justify-between items-center">

                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {item.category}
                    </span>

                    <span className="bg-yellow-400 px-3 py-1 rounded-lg font-semibold">
                      ⭐ {item.rating.rate}
                    </span>

                  </div>

                  <h2 className="text-2xl font-bold mt-3 line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 mt-3 line-clamp-2">
                    {item.description}
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    {item.rating.count} Reviews
                  </p>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-5">

                  {/* Price */}
                  <h2 className="text-3xl font-bold text-green-600">
                    ${item.price}
                  </h2>

                  {/* Quantity */}
                  <div className="flex items-center border rounded-lg overflow-hidden shadow">

                    <button className="w-10 h-10 text-xl bg-gray-100 hover:bg-gray-200">
                      −
                    </button>

                    <span className="w-12 text-center font-semibold">
                      {item.quantity||1}
                    </span>

                    <button className="w-10 h-10 text-xl bg-gray-100 hover:bg-gray-200">
                      +
                    </button>

                  </div>

                  {/* Remove Button */}
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}

          {/* Cart Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center mt-5">

            <div>
              <h2 className="text-2xl font-bold">
                Cart Summary
              </h2>

              <p className="text-gray-500">
                Total Items: {cartItems.length}
              </p>
            </div>

            <button className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default CartCard;