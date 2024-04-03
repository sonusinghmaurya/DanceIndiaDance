import React from 'react'
import AdminSideBar from './AdminSideBar'
import AdminMainBar from './AdminMainBar'
import "./Admin.css"
const AdminDashboard = () => {
  return (
            <>
            <section>
                <article id='dashboard'>
                    <AdminSideBar/>
                    <AdminMainBar/>
                </article>
            </section>
            </>
      
    
  )
}

export default AdminDashboard