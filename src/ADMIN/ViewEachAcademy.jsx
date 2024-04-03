

import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../HELPERS/AxiosInstance";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const ViewEachAcademy = () => {
  let { id } = useParams();
  let [academy, setAcademy] = useState("");
  let navigate=useNavigate()
  let token = window.localStorage.getItem("token");

  useEffect(() => {
    let fetchData = async () => {
      let token = window.localStorage.getItem("token");
      let { data } = await axiosInstance.get(`/academies/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setAcademy(data.data);
    };
    fetchData();
  }, []);

  const handledelete = async (id) => {
   
      let data=await axiosInstance.delete(`/academies/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}});
      window.location.assign("/adminDashboard/viewAcademyManager")
      toast.success("DELETED SUCCESSFULLY");
      // alert("admin manager data deleted successfully")
      

      // setManager(prevUsers => prevUsers.filter(manager => manager.id !== id));//important line
      // navigate("/adminDashboard/viewAcademyManager"); // Use navigate to perform navigation
    
    
  };
  return (
    <div className="container_view_manager">
      <ToastContainer />
      <h1 className="header_view_manager">Manager Information</h1>
      <div className="info_table">
        <div className="info_row">
          <div className="info_key">Name:</div>
          <div className="info_value">{academy.academyName}</div>
        </div>
        <div className="info_row">
          <div className="info_key">Email:</div>
          <div className="info_value">{academy.email}</div>
        </div>
        <div className="info_row">
          <div className="info_key">contact:</div>
          <div className="info_value">{academy.contact}</div>
        </div>
        <div className="info_row">
          <div className="info_key">description:</div>
          <div className="info_value">{academy.description}</div>
        </div>
       
      </div>
      <div className="buttons_view_manager">
        <button> <Link to={`/adminDashboard/viewAcademyManager/ViewAcademyEachManager/updateManagerDetails/${academy.id}`}>EDIT</Link></button>
        <button> <Link to={`/adminDashboard/viewAcademy/viewEachAcademy/addBranch/${academy.id}`}>ADD BRANCH</Link></button>
       <button
               
                onClick={() => {
                  handledelete(academy.id);
                }}
              >
                Delete
              </button>
      </div>
    </div>
  );
  
  
};

export default ViewEachAcademy;
