import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
const RegisterPage = () => {
    let navigate=useNavigate()
    const {registeredUsers,setRegisteredUsers,setLoggedInUser}=useContext(Auth)
    let {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm()
    const formSubmit=(data)=>{
        let arr=[...registeredUsers,data]
       setRegisteredUsers(arr)
       alert('user registered succesfully') 
       setLoggedInUser(data)
       localStorage.setItem("loggedinUser",JSON.stringify(data))
       localStorage.setItem('registeredUsers',JSON.stringify(arr))
       navigate('/main')
       reset()
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Register to get started
          </p>
        </div>

        {/* Form */}
        <form 
        onSubmit={handleSubmit(formSubmit)}
        className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
             {
                ...register("name",{
                    required:"name is required"
                })
             }
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
                </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
            {
                ...register("email",{
                    required:'email is required'
                })
            }
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
             {
                ...register("password",{
                    required:'password is required',
                   minLength:{
                    value:6,
                    message:'minimum 6 character is required'
                   }
                })
            }
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
          onClick={()=>navigate('/')}
          className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;