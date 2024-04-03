import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../HELPERS/AxiosInstance";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const ViewAcademyEachManager = () => {
  let { id } = useParams();
  let [manager, setManager] = useState("");
  let navigate=useNavigate()
  let token = window.localStorage.getItem("token");

  useEffect(() => {
    let fetchData = async () => {
      let token = window.localStorage.getItem("token");
      let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setManager(data.data);
    };
    fetchData();
  }, []);

  const handledelete = async (id) => {
   
      let data=await axiosInstance.delete(`/academymanagers/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}});
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
          <div className="info_value">{manager.userName}</div>
        </div>
        <div className="info_row">
          <div className="info_key">Email:</div>
          <div className="info_value">{manager.email}</div>
        </div>
        <div className="info_row">
          <div className="info_key">Designation:</div>
          <div className="info_value">{manager.role}</div>
        </div>
        <div className="info_row">
          <div className="info_key">Phone:</div>
          <div className="info_value">{manager.phone}</div>
        </div>
        <div className="info_row">
          <div className="info_key">Gender:</div>
          <div className="info_value">{manager.gender}</div>
        </div>
        <div className="info_row">
          <div className="info_key">DOB:</div>
          <div className="info_value">{manager.dob}</div>
        </div>
      </div>
      <div className="buttons_view_manager">
        <button> <Link to={`/adminDashboard/viewAcademyManager/ViewAcademyEachManager/updateManagerDetails/${manager.id}`}>EDIT</Link></button>
        <button> <Link to={`/adminDashboard/viewAcademyManager/ViewAcademyEachManager/addAcademy/${manager.id}`}>ADD ACADEMY</Link></button>
       <button
               
                onClick={() => {
                  handledelete(manager.id);
                }}
              >
                Delete
              </button>
      </div>
    </div>
  );
  
  
};

export default ViewAcademyEachManager;
