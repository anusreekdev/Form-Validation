import React, { useState } from 'react'

const Array = () => {
    // 1
    // const [students,setStudents]=useState([
    //     "anusree",
    //     "anamika",
    //     "shivadu"
    // ])

    // 2 add
    // const[students,setStudents]=useState([
    //     "abc",
    //     "def",
    //     "hij"
    // ])

    // const [name,setName]=useState('')
    // const addStudents=()=>{
    //     setStudents([...students,name])
    //     setName('')
    // }

    // 3 delete
    // const[students,setStudents]=useState([
    //     "abc",
    //     "def",
    //     "hij"
    // ])

    // const [name,setName]=useState('')
    // const addStudents=()=>{
    //     setStudents([...students,name])
    //     setName('')
    // }
    // const deleteStudents=(element)=>{
    //     let result=students.filter((stud)=>{
    //         return stud!==element
    //     })
    //     setStudents(result)

    // }

    // 4 update
    //     const[students,setStudents]=useState([
    //     "abc",
    //     "def",
    //     "hij"
    // ])

    // const [name,setName]=useState('')
    // const addStudents=()=>{
    //     setStudents([...students,name])
    //     setName('')
    // }
    // const deleteStudents=(element)=>{
    //     let result=students.filter((stud)=>{
    //         return stud!==element
    //     })
    //     setStudents(result)

    // }
    //   const updateBtn=(oldName)=>{
    //     let result=students.map((element)=>{
    //         if(element==oldName){
    //             return "update success"
    //         }
    //         return element
    //     })
    //  setStudents(result)
    //   }
  return (
    <div>
        {/* 1 */}
      {/* <h1>Students List</h1>
      {
        students.map((stu)=>{
            return <h3>{stu}</h3>
        })
      } */}
      {/* 2 add*/}
      {/* <h1>Student Management</h1>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name' />
      <button onClick={addStudents}>Add Students</button>
      {
        students.map((val)=>{
            return <h3>{val}</h3>
        })
      } */}

      {/* 3  delete*/}
      

       {/* <h1>Student Management</h1>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name' />
      <button onClick={addStudents}>Add Students</button>
      {
        students.map((val,ind)=>{
            return   <div key={ind}>
        <h3>{val}</h3>

          <button onClick={()=>deleteStudents(val)}>Delete</button>

          

            </div>
        })
      } */}


      {/* 4  update*/}  
      
         {/* <h1>Student Management</h1>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name' />
      <button onClick={addStudents}>Add Students</button>
      {
        students.map((val,ind)=>{
            return   <div key={ind}>
        <h3>{val}</h3>

          <button onClick={()=>deleteStudents(val)}>Delete</button>
          <button onClick={()=>updateBtn(val)}>Update</button>

          

            </div>
        })
      }
         */}
      
       
    </div>
  )
}

export default Array



