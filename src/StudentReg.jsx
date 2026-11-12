import React, { useState } from 'react'

const StudentReg = () => {
    const [student,setStudent]=useState({
        name:"",
        age:"",
        email:"",
        course:"",
    })
    const [submittedstudent,setsubmittedStudent]=useState(null)
    const [error,setError]=useState('')
     
    const HandleSubmit=(e)=>{
      e.preventDefault()
      if(student.name.trim()==="" || student.age.trim()==="" || student.email.trim()==="" || student.course.trim()===""){
        return setError("fill all the fields")
      }else{
        setError("")
      }

      setsubmittedStudent(student)

      setStudent({
        name:"",
        age:"",
        email:"",
        course:""
      })

    }

  return (
    <div>
        <h1>Student Registration Form</h1>
        <input value={student.name} onChange={(e)=>setStudent({...student,name: e.target.value})} type="text" placeholder='enter your name' />
        <input value={student.age} onChange={(e)=>setStudent({...student,age: e.target.value})} type="number" placeholder='enter your age' />
        <input value={student.email} onChange={(e)=>setStudent({...student,email: e.target.value})} type="email " placeholder='enter your email' />
        

        <select value={student.course} onChange={(e)=>setStudent({...student,course: e.target.value})}>
      <option disabled selected value="">Select Course</option>
      <option value="Mern">Mern</option>
      <option value="Programming">Programming</option>
      <option value="Python">Python</option>
        </select>

        {/* <h3>{student.name}</h3>
        <h3>{student.age}</h3>
        <h3>{student.email}</h3>
        <h3>{student.course}</h3> */}

        <button onClick={HandleSubmit}>Submit</button>
        {
            error && (
                <h4 style={{color:"red"}}>{error}</h4>
            )
        }
        {
            submittedstudent && (
                <div>
                    <h4>{submittedstudent.name}</h4>
                    <h4>{submittedstudent.age}</h4>
                    <h4>{submittedstudent.email}</h4>
                    <h4>{submittedstudent.course}</h4>
                </div>
            )
        }
        
    </div>
  )
}

export default StudentReg
