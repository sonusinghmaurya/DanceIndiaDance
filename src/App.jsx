import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NAVBAR/Navbar";
import Bio from "./COMPONENT_ROUTE/Bio";
import Music from "./COMPONENT_ROUTE/Music";
import Videos from "./COMPONENT_ROUTE/Videos";
import DncrAcademy from "./COMPONENT_ROUTE/DncrAcademy";
import Register from "./COMPONENT_ROUTE/Register";
import Login from "./COMPONENT_ROUTE/Login";
import Register_admin from "./ADMIN/Register_admin";
import Protected_route from "./ROUTES/Protected_route";
import "./global.css"
import AdminDashboard from "./ADMIN/AdminDashboard";
import AcademyManagerRegister from "./ADMIN/AcademyManagerRegister";
import ViewAcademyManager from "./ADMIN/ViewAcademyManager";
import ViewAcademyEachManager from "./ADMIN/ViewAcademyEachManager";
import UpdateManagerDetails from "./ADMIN/UpdateManagerDetails";
import AddAcademy from "./ADMIN/AddAcademy";
import ViewAcademy from "./ADMIN/ViewAcademy";
import ViewEachAcademy from "./ADMIN/ViewEachAcademy";
import AddBranch from "./ADMIN/AddBranch";
import ViewBranch from "./ADMIN/ViewBranch";

const App = () => {
  return (
    <BrowserRouter> 
    <Navbar/>
      <Routes> 
      <Route path="/" element={<Protected_route><Bio/></Protected_route>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/dncr-academy" element={<DncrAcademy/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Register_admin/>}/>


        <Route path="/adminDashboard" element={<AdminDashboard/>}>
             <Route path="/adminDashboard/addAcademyManager" element={<AcademyManagerRegister/>}/>
             <Route path="/adminDashboard/viewAcademyManager" element={<ViewAcademyManager/>}/>
             <Route path="/adminDashboard/viewAcademyManager/ViewAcademyEachManager/:id" element={<ViewAcademyEachManager/>}/>
             <Route path="/adminDashboard/viewAcademyManager/ViewAcademyEachManager/updateManagerDetails/:id" element={<UpdateManagerDetails/>}/>
             <Route path="/adminDashboard/viewAcademyManager/ViewAcademyEachManager/addAcademy/:id" element={<AddAcademy/>}/>
             <Route path="/adminDashboard/viewAcademy" element={<ViewAcademy/>}/>
             <Route path="/adminDashboard/viewAcademy/viewEachAcademy/:id" element={<ViewEachAcademy/>}/>
             <Route path="/adminDashboard/viewAcademy/viewEachAcademy/addBranch/:id" element={<AddBranch/>}/>
             <Route path="/adminDashboard/viewBranch" element={<ViewBranch/>}/>

        </Route>
        

    

      </Routes>
    </BrowserRouter>
  );
};

export default App;
