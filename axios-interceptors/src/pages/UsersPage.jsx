import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import UserCard from '../component/UserCard';
import { axiosInstance } from '../config/axiosInstance';
const UsersPage = () => {
     const [userData,setUsersData]=useState([]);
    let getUsersData=async()=>{
        try {
            let res=await axiosInstance('/users')
            setUsersData(res.data)
        } catch (error) {
            console.log('errors',error);
        }
    }
    useEffect(()=>{
        getUsersData()  
    },[])
    console.log(userData);
   
    return (
    <div className='grid grid-cols-4 gap-2'>
        {
           userData.map((val)=>(
            <UserCard key={val.id} user={val}/>
           ))
        }
    </div>
  )
}

export default UsersPage