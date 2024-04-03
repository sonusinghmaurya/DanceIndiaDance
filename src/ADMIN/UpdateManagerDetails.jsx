
import React, { useState } from "react";
import axiosInstance from "../HELPERS/AxiosInstance";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateManagerDetails = () => {
    let { id } = useParams();
    let [manager, setManager] = useState([]);
    let navigate=useNavigate()
  let token = window.localStorage.getItem("token");
  




  let handleUpdate=async (e)=>{
    e.preventDefault()
    try{
        let payload=manager
        await axiosInstance.put("/academymanagers/update",payload,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        alert("update successfully")
        navigate("/adminDashboard/viewAcademyManager")
    } catch{
        console.log("unable to connect to server")
    }
  }
  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setManager({ ...manager, [name]: value });
  };



    useEffect(() => {
        let fetchData = async () => {
          let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(data.data);
          setManager(data.data);
        };
        fetchData();
      }, []);
  
  return (
    <>
      <h1>Update manager Register Form</h1>
      <div className="register-container">
        <form className="register-form" onSubmit={handleUpdate}>
          <h1>Update Register Form For Manager</h1>
          <br />
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
            value={manager.userName}
              type="text"
              id="username"
              name="userName"
              onChange={handleData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={manager.email} type="email" id="email" name="email" onChange={handleData} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            value={manager.password}
              type="password"
              id="password"
              name="password"
              onChange={handleData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input value={manager.dob} type="date" id="dob"  name="dob" onChange={handleData} />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input value={manager.phone} type="tel" id="phone" name="phone" onChange={handleData} />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <div className="gender-options">
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={manager.gender}
                  onChange={handleData}
                />{" "}
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={manager.gender}
                  onChange={handleData}
                />{" "}
                Female
              </label>
              <label htmlFor="other">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value={manager.gender}
                  onChange={handleData}
                />{" "}
                Other
              </label>
            </div>
          </div>
          <button className="nor_button" type="submit">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateManagerDetails;
