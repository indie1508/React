import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";
export const useAuth=()=>{
     let navigate=useNavigate()
     const {registeredUsers,loggedInUser,setLoggedInUser}=useContext(Auth)
    let {
              register,
              handleSubmit,
              reset,
              formState:{errors}
          }=useForm()
          const logginFormSubmit=(data)=>{
              let user=registeredUsers.find((val)=>{
                return val.email===data.email && val.password===data.password
              })
              if(!user){
                toast.error("invalid creds or user not found")
                return
              }
              setLoggedInUser(user)
              localStorage.setItem('loggedinUser',JSON.stringify(user))
              toast.success("user logged in")
              navigate('/main')
              reset()
          }  
          let registerFormSubmit=(data)=>{
        let arr=[...registeredUsers,data]
       setRegisteredUsers(arr)
       alert('user registered succesfully') 
       setLoggedInUser(data)
       localStorage.setItem("loggedinUser",JSON.stringify(data))
       localStorage.setItem('registeredUsers',JSON.stringify(arr))
       navigate('/main')
       reset()
    }

    return {
        navigate,register,handleSubmit,reset,errors,logginFormSubmit,registerFormSubmit
    }
}