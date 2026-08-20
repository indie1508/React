import { createContext, useState} from "react";
// setup our blank store--
export const MyStore=createContext()
// Make a provider of our store who handle data
// and serves to customer
export const ContextProvider=({children})=>{
    const [centralValue,setCentralValue]=useState("mein context se hoon")
    return <MyStore.Provider value={centralValue}>
        {children}
    </MyStore.Provider>
}