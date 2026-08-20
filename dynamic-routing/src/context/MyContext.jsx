import { use, useState } from "react";
import { createContext } from "react";
export const MyStore=createContext()
export const ContexProvider=({children})=>{
     const [productsData,setProductData]=useState([]) 
      
      
      return <MyStore.Provider value={{productsData,setProductData}}>
        {children}
        </MyStore.Provider>
}