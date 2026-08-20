import React,{useState} from 'react'

const OptimisedApproach = () => {
   const [formData,setFormData]=useState({
          name:"",
          email:"",
          password:""
      })
      console.log("formData->",formData);
      
      const handleChange=(e)=>{
         setFormData({...formData,[e.target.name]:e.target.value})
        // console.log(e);
        
      }
      
    return (
      <div>
        <div>
          <div className='flex flex-col gap-2'>
          <input 
            name="name" 
            onChange={handleChange}
            type="text"
            placeholder='Name'
            className='border-2' 
          />
        <input 
           name="email" 
           onChange={handleChange} 
           type="text" 
           placeholder='Email' 
           className='border-2' 
          />
        <input
           name="password" 
           onChange={handleChange} 
           type="password" 
           placeholder='Password' 
          className='border-2'/>
        <button>Submit</button>
      </div>
      </div>
      </div>
    )
}

export default OptimisedApproach
