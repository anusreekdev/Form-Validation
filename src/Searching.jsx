import React, { useEffect, useState } from 'react'

import axios from 'axios'


const Searching = () => {
    const [users,setUsers]=useState([])
    const [search,setSearch]=useState('')

    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
            setUsers(res.data.users);
            
        })
    },[])

    const filterusers=users.filter((e)=>{
        return e.firstName.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <div>
        <h2>Users Details</h2>
      <input value={search} type="text" placeholder='searching...' onChange={(e)=>setSearch(e.target.value)} />
      {
        filterusers.map((a)=>(
            <div key={a.id}>
                <h2>{a.firstName}</h2>
            </div>
            
        ))
      }
    </div>
  )
}

export default Searching




 







