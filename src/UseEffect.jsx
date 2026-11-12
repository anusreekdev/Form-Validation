import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // 1useEffect
    const [count,setCount]=useState(0)

    // useEffect(()=>{
    //     console.log('react');
        
    // },[])

    // 2
   
    useEffect(()=>{
        setInterval(()=>{
        console.log('helloo');
        },2000)
     

      
    },[])

  return (
    <>
    {/* 1  */}
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </>
  )
}

export default UseEffect
