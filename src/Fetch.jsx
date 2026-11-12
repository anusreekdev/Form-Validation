import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/users").then((res)=>
            res.json()
        
    ).then((data)=>{
        setUsers(data.users)
        console.log(data.users);
        
    }).catch((err)=>{
        console.log(err);
        
    })
    },[])
  return (
    <>
        <h1>UserList</h1>
      {
        users.map((user)=>(
          <div key={user.id}>
            <h2>{user.firstName}</h2>


          </div>
        ))
      }

    </>
  )
}

export default Fetch
