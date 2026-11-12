import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const StudentForm = (value) => {
  return (
    <div>
        <Home/>
       <h1> Student Form</h1>
      <input  type="text" placeholder='enter your name' onChange={(e)=>value.setName(e.target.value)} />
    <Link to="StudentList">View Details</Link>
    </div>
  )
}

export default StudentForm
