import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>
    <section>
        <article>
            <div className='admin-sidebar'>
                <ul>
                    <h2>Admin Dashboard</h2>
                  <li><Link to={"/adminDashboard/addAcademyManager"}>Add Academy Manager</Link></li>
                  <li><Link to={"/adminDashboard/viewAcademyManager"}>View Academy Manager</Link></li>
                   <li><Link to={"/adminDashboard/viewAcademy"}>View Academy</Link></li>
                  <li><Link to={"/adminDashboard/viewBranch"}>View Branch</Link></li>
                  <li><Link>View Course</Link></li>
                  <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </article>
    </section>
    </>
  )
}

export default AdminSideBar