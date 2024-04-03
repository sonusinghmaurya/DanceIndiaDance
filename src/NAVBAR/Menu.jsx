import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
const Menu = () => {
  let navigate = useNavigate()
  let role=localStorage.getItem("role")
  let token=localStorage.getItem("token")
    // let[tokenstate, setTokenstate]=useState(token)
    let logoutHandler=()=>{
      alert("are you sure, you want to logout")
      localStorage.clear()
      navigate("/login")
    }
  
    return (
        <div id='menu'>
          <ul>
              <li className='blue'><Link to={"/"}>BIO</Link></li>
              <li><Link to={"/music"}>MUSIC</Link></li>
              <li><Link to={"/videos"}>VIDEOS</Link></li>
              <li><Link to={"/dncr-academy"}>DNCR ACADEMY</Link></li>
              {role==="ROLE_ADMIN" ? <li><Link to="/adminDashBoard">ADMIN DASHBOARD</Link></li>:null}
              {token? <li><Link to="/login" onClick={logoutHandler}>LOGOUT</Link></li>:
              <>
              <li><Link to="/login">LOGIN</Link></li>
              <li><Link to="/register">REGISTER</Link></li>
              </>}
          </ul>
        </div>
      )
}

export default Menu

