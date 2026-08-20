import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-700 px-8 py-20 text-white">
        <h1 className="text-5xl font-bold">
          Welcome to Our Store
        </h1>

        <p className="mt-4 text-lg">
          Discover amazing products at the best prices.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="mb-6 text-3xl font-bold">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;