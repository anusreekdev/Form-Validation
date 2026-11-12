import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Sorting = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
            setUsers(res.data.users)
        })
    },[])
    const sortAz=()=>{
            const result=[...users].sort((a,b)=>{
                // return a.firstName.localeCompare(b.firstName)
                return a.age -b.age
            })
            setUsers(result)
    }
  return (
    <div>
      <h2>Sorting</h2>
      <button onClick={sortAz}>A-Z</button>
      {
        users.map((e)=>(
            <div key={e.id}>
                <h3>{e.age}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Sorting
