
import React, { useState } from 'react'

const Home = () => {
// 1
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const [nameError,setnameError]=useState('')
const [emailError,setemailError]=useState('')
const [passwordError,setpasswordError]=useState('')

const [success,setSuccess]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault()

  let valid=true
  setSuccess('')

  // name
  if(name.trim()===""){
    setnameError('name is required')
    valid=false
  }else{
    setnameError('')
  }

  // email
  if(email.trim()===""){
    setemailError("email is required")
    valid=false
  }else{
    setemailError('')
  }
  // password
  if(password.trim()===""){
    setpasswordError('password is required')
    valid=false
  }else{
    setpasswordError('')
  }

  if(valid){
     setSuccess("Login your successfully")
  setName('')
  setEmail('')
  setPassword('')
  }
   
}


  return (
    <div>
      <h1 style={{color:"blue"}}>Form Validation</h1>
      <input  value={name} onChange={(e)=>{
        setName(e.target.value), setnameError(''), setSuccess('')
      }} type="text" placeholder='enter your name' /> <br />
      {
        nameError &&(
          <p style={{color:"red"}}>{nameError}</p>
        )
      }

      <input style={{margin:20}}  value={email} onChange={(e)=>{
        setEmail(e.target.value), setemailError(''), setSuccess('')
      }}  type="email" placeholder='enter your email' /> <br />
       {
        emailError && (
          <p style={{color:"red"}}>{emailError}</p>
        )
       }

      <input value={password} onChange={(e)=>{
    setPassword(e.target.value), setpasswordError(''), setSuccess('')
      }} type="password" placeholder='enter your password' /> <br />
      {
        passwordError &&(
          <p style={{color:"red"}}>{passwordError}</p>
        )
      }

      <button style={{margin:10,height:30,width:100,background:'skyblue',  }} onClick={handleSubmit}>Submit</button>
      {
        success &&(
       <h3 style={{color:"green"}}>{success}</h3>
        )
      }
    </div>
  )
}

export default Home
