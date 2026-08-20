import { createContext, useState } from "react";

export const Auth=createContext()

export const AuthProvider=({children})=>{
    console.log('context rendering');
    
    const [registeredUsers,setRegisteredUsers]=useState(JSON.parse(localStorage.getItem('registeredUsers'))||[])
    const [loggedInUser,setLoggedInUser]=useState(JSON.parse(localStorage.getItem('loggedinUser'))||null)
    return <Auth.Provider value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser
    }}>{children}</Auth.Provider>
}
