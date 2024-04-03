import React, { useState } from 'react'
import axiosInstance from "../HELPERS/AxiosInstance";
import {useNavigate} from "react-router-dom"
const Login = () => {
  let navigate=useNavigate()
  let[user,setUser]=useState({
    userEmail:"",
    password:"",
  })
  let{userEmail,password}=user
  let handleData=(e)=>{
    let value=e.target.value
    let name = e.target.name
    setUser({...user,[name]:value})
  }

  let handleSubmit= async (e)=>{
    e.preventDefault()
    console.log(user)
    try{
      let payload={
        userEmail,
        password
      }
      let {data}=await axiosInstance.post("/authenticate",payload) 

      console.log(data)
      let token =data.token
      let role =data.role
      console.log(token)
      console.log(role)

      if(token){
        localStorage.setItem("token",token)
        localStorage.setItem("role",role)
        if(role==="ROLE_ADMIN"){
        alert(`successfully logged in with the email ${userEmail} as Admin`)
        navigate("/")      
        }
        else{
          alert(`successfully logged in with the email ${userEmail}as User`)
          navigate("/") 
        }
          
      }
      
      alert("sussesfully login")
    }
    catch{
      console.log("unable to connect to server")
    }
  }
  return (
    <div className="register-container">

        <form action="" className="register-form" onSubmit={handleSubmit} >
          <h1>LOGIN</h1>
           <div className="input-group">
           <label htmlFor="">userEmail</label>
            <input type="text" id='useremail' name='userEmail' onChange={handleData} />
           </div>
           <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" onChange={handleData} />
           </div>
          
            <button className='nor_button' type="submit">Submit</button>
           

        </form>
    </div>
  )
}

export default Login