import React from 'react'
import CartCard from '../component/CartCard'

const CartScreen = ({cartItems}) => {
  return (
    <div className='h-screen text-6xl'>
      {
        cartItems.map((elem)=>{
          return <CartCard key={elem.id} cartItems={cartItems}/>
        })
      }
    </div>
  )
}

export default CartScreen