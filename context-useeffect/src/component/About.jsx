import React, { useEffect } from 'react'

const About = () => {
   let interval=setInterval(()=>{
    console.log("hey i m in about"); 
   },1000)
//    only use when your component leaks some memory 
// and if you want to track any updates
   useEffect(()=>{
    console.log("About rendering");
    return()=>{
        clearInterval(interval)
        console.log("i m triggered kyki about jaa chuka hai");
        
    }
   },[])
  return (
    <div>About</div>
  )
}

export default About