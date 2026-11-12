import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Axios = () => {
    // 1 get
    // const [users,setUsers]=useState([])

    // useEffect(()=>{
    //   axios.get('https://dummyjson.com/users').then((res)=>{
    //     setUsers(res.data.users);
        
    //   })
    // },[])

    // 2 add post

//     const [users,setUsers]=useState({
//         name:"",
//         email:""
//     })
//     const handleSubmit=(e)=>{
//    e.preventDefault()
    
//     axios.post("https://dummyjson.com/users/add",users).then((res)=>{
//         console.log(res.data);
// alert("success")
       
        
//     })
// }

// 3 put 

// const [users,setUsers]=useState({
//     name:"",
//     email:""
// })
// const handleSubmit=(e)=>{
// e.preventDefault()
// axios.put('https://dummyjson.com/users/1').then((res)=>{
//     console.log(res.data);
//     alert('updated')
// })
// }



  return (
    <>
    {/* 1 */}
        {/* <h1>List</h1>
        {
            users.map((a)=>(
                
                <div key={a.id}>
                    <h4>{a.lastName}</h4>
                </div>
            ))
        } */}

        {/* 2 */}
        {/* <input value={users.name} type="text" placeholder='enter your name' onChange={(e)=>setUsers({...users,name:e.target.value})} /> <br />
       <input value={users.email} type="email" placeholder='enter your email' onChange={(e)=>setUsers({...users,email:e.target.value})} />
       <button onClick={handleSubmit}>Submit</button> */}

{/* 3 */}
       {/* <button onClick={handleSubmit}>Edit</button> */}
    </>
  )
}

export default Axios


 