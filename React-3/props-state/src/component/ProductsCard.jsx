import React from 'react'

const ProductsCard = ({product,del}) => {
    // del()
  return (
    <div className='p-4 border-2 h-fit rounded-b-lg top-2 flex flex-col gap-2'>
      <div className='w-40 h-50'>
        <img src={product.image} alt="" />
      </div>
      <div>
       <h1 className='font-semibold'>{product.title.substring(0,10)}</h1>
       <p className='text-xs'>{product.category}</p>
       <h1 className='text-emerald-700'>{product.price}</h1>
      </div>
      <button className='p-2 bg-red-500 rounded-full ' onClick={()=>del(product.id)}>Delete</button>
    </div>
  )
}

export default ProductsCard
