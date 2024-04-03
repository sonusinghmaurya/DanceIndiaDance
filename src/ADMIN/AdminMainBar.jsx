import React from 'react'
import { Outlet } from 'react-router'

const AdminMainBar = () => {
  return (
    <div style={{width:"80%"}}>

        

        <Outlet/>
    </div>
  )
}

export default AdminMainBar