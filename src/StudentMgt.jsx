import React, { useState } from 'react'

const StudentMgt = () => {
//    1 create
const [students,setStudents]=useState([{
    name:"arun",
    age:25,

},{
    name:"Babu",
    age:52,

},{
    name:"Sheeja",
    age:50
}])

// 2 add
const [addStudents,setaddStudents]=useState({
    name:"",
    age:""
})
const handleSubmit=(e)=>{
   e.preventDefault()
   setStudents([...students,addStudents])
   setaddStudents({
    name:"",
    age:""
   })
} 
// 3
const deleteStudent=(index)=>{
    const result=students.filter((value,i)=>{
        return i!==index
    })
    setStudents(result)
}
// 4
const [editId,setEditId]=useState(null)

const editStudent=(value,index)=>{
    setaddStudents({
        name:value.name,
        age:value.age
    })
    setEditId(index)
}
const updateStudent=()=>{
    if(addStudents.name.trim()==="" || addStudents.age.trim()===""){
        return alert("please fill")
    }
const result=students.map((value,index)=>{
    if(index===editId){
           return addStudents
    }
    return value
     
})
setStudents(result)
setaddStudents({
    name:"",
    age:""
})
}


  return (
    <div>
        {/* 1  create read */}
        <h1>Student Management</h1>
        {
            students.map((value,index)=>(
              <div key={index}>
                <h4>{value.name}</h4>
                <h4>{value.age}</h4>
               {/* 3 Delete */}
        <button onClick={()=>deleteStudent(index)}>Delete</button>
        {/* 4 */}
        <button onClick={()=>editStudent(value,index)}>edit</button>

         
              </div>
            ))
        }
        {/* 2 ADD */}
        <input value={addStudents.name} onChange={(e)=>setaddStudents({...addStudents,name:e.target.value})} type="text" placeholder='enter name' />
        <input value={addStudents.age} onChange={(e)=>setaddStudents({...addStudents,age:e.target.value})} type="text"  placeholder='enter age'/>
        <button onClick={handleSubmit} style={{background:"blue", height:40, color:"white",width:100}} >add Student</button>
        {/* 4 */}
        <button onClick={updateStudent}>Update</button>

    </div>
  )
}

export default StudentMgt
  

