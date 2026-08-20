import React from 'react'
import { useForm } from 'react-hook-form';
const ReacthookForm = () => {
    let {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm()
    const formSubmit=(data)=>{
         console.log(data);
         reset()
    }
  return (
    <div className='w-80 h-screen'>
        React Hook Form
      <form 
      onSubmit={handleSubmit(formSubmit)}
      className='flex p-6 rounded bg-white flex-col gap-4'>
        <input
        {...register("productName")}
        className='p-2 border-gray-400 rounded' 
        type="text"
        placeholder='Product name'/>
        <input 
        {...register("price")}
        className='p-2 border-gray-400 rounded' 
        type='number'
        placeholder='Price'/>
        <input
          {...register("category")}
          className='p-2 border-gray-400 rounded'
          type="text"
          placeholder='Category'/>
        
        <input 
        {...register("image")}
        className='p-2 border-gray-400 rounded' 
        type="text" 
        placeholder='image'/>
        <button className='p-2 bg-blue-600 text-white rounded-2xl'>Create</button>
      </form>
    </div>
  )
}

export default ReacthookForm
