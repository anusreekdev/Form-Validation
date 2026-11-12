import React, { useState } from 'react'
import Home from './Home'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import { Route, Routes } from 'react-router-dom'
import Array from './Array'
import Object from './Object'
import StudentReg from './StudentReg'
import StudentMgt from './StudentMgt'
import UseEffect from './UseEffect'
import Fetch from './Fetch'
import Axios from './Axios'
import Searching from './Searching'
import Sorting from './Sorting'

const App = () => {
  const [name,setName]=useState('')

  return (
    <div>
   <Array/>
   {/* <Object/> */}
   {/* <StudentReg/> */}
   {/* <StudentMgt/> */}
   {/* <UseEffect/> */}
   {/* 1 */}
   {/* <Routes>
    <Route path='/' element={<StudentForm setName={setName}/>}/>
    <Route path='/studentList' element={<StudentList name={name}/>}/>


   </Routes> */}
   {/* <Fetch/> */}
   {/* <Axios/> */}
   {/* <Searching/> */}
   <Sorting/>

    </div>
      
  )
}

export default App
