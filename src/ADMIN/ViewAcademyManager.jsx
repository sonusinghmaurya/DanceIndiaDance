import React, { useEffect, useState } from "react";
import axiosInstance from "../HELPERS/AxiosInstance";
import { Link, useNavigate } from "react-router-dom";

const ViewAcademyManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      let token = window.localStorage.getItem("token");
      let response = await axiosInstance.get("/academymanagers/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
const handleview=  async () => {
  
}  

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="view">
      {/* <ToastContainer /> */}
      <h1>User Details</h1>
      <div className="block">
        {data.map((x) => (
          <div key={x.id} className="card">
            <h3>{x.id}</h3>
            <h1>{x.userName}</h1>
            <p>{x.email}</p>

            <div className="card-buttons">
              
              <button
                className="view_button">
                  <Link to={`/adminDashboard/viewAcademyManager/ViewAcademyEachManager/${x.id}`}>view</Link>
               
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAcademyManager;
