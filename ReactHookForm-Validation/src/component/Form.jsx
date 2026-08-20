import React from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'
const Form = ({setUsers,setToggle,users,updatedData}) => {
    let {register,
        handleSubmit,
        reset,
        formState:{errors}
}=useForm({
    mode:"onchange",
    defaultValues:updatedData
})

let formSubmit=(data)=>{
    // 1.) setusers async code hai aur localStorage sync code hai toh local
    // phle execute hoga toh new data store nhi ho paayega woh agle data jb
    // store hoga tbhi hoga
    // 2.)Isko avoid krne ke liye yeh let arr=[...users,data] apply krenge
    // aur setUsers(arr) store kr denge phir local storage mein kyki
    // yeh let arr=[...users,data] synchronous hai
      console.log(data.name);
    if(updatedData){
        // updated ka code likhna hai
        setUsers((prev)=>{
            return prev.map((val)=>{
                return val.id===updatedData.id?{...data}:val
            })
        })
    }else{
      let arr=[...users,{...data,id:nanoid() }]
      setUsers(arr)
      localStorage.setItem("users",JSON.stringify(arr))
    }
      reset()
      setToggle(prev=>!prev)
}
  return (
    <div className='flex flex-col items-center gap-6'>
        <h1 className='text-xl font-bold'>Create User </h1>
      <form 
       onSubmit={handleSubmit(formSubmit)}
       className='w-90 flex flex-col gap-3 p-4 rounded border-2 border-black'>
        <input 
        {...register("name",{
            required:"Name is required"
        })}
        className='p-2 rounded outline-0 border border-black'
         type="text" 
         placeholder='Name'/>
         {errors.name && <p className='bg-red-500'>{errors.name.message}</p>}
        <input
        {...register("email",{
            required:"email is required",
            pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"enter valid email"
            }
        })} 
        className='p-2 rounded outline-0 border border-black'
         type="email" 
         placeholder='Email'/>
         {errors.email && <p className='bg-red-500'>{errors.email.message}</p>}
        <input 
        {...register("number",{
            required:"number is required",
            minLength:{
                value:10,
                message:"minimum 10 digits are required",
            },
            maxLength:{
                value:10,
                message:"maximum 10 digits are required",
            }
        })}
        className='p-2 rounded outline-0 border border-black' 
        type="number" 
        placeholder='Number'/>
        {errors.number && <p className='bg-red-500'>{errors.number.message}</p>}
        <input 
        {...register("image",{
            required:"image is required"
        })}
        className='p-2 rounded outline-0 border border-black'
         type="url"
          placeholder='Image'/>
          {errors.image && <p className='bg-red-500'>{errors.image.message}</p>}
        <button 
        className='text-white bg-blue-700 p-2 rounded-xl cursor-pointer'>Add User</button>
      </form>
    </div>
  )
}

export default Form
