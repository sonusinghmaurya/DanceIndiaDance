import React, { useState } from "react";
import axiosInstance from "../HELPERS/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
const AddBranch = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let token = window.localStorage.getItem("token");
  let [data, setData] = useState({
    address: "",
    city: "",
    phone: "",
    pincode: "",
  });
  let { address, city, phone, pincode } = data;

  let handleData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      let payload = {
        address,
        city,
        phone,
        pincode,
      };
      let finalData = await axiosInstance.post(
        `/branches/save/?aid=${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(finalData);
      alert(`successfully registered academy with ${city} `);
      navigate("/adminDashboard/viewBranch");
    } catch {
      console.log("unable to connect to server");
    }
  };
  return (
    <>
      <h1>Add Branch</h1>
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Add Branch register form</h1>
          <br />

          <div className="input-group">
            <label htmlFor="email">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">city</label>
            <input type="text" id="city" name="city" onChange={handleData} />
          </div>
          <div className="input-group">
            <label htmlFor="description">Phone</label>
            <input type="text" id="phone" name="phone" onChange={handleData} />
          </div>
          <div className="input-group">
            <label htmlFor="description">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              onChange={handleData}
            />
          </div>

          <button className="nor_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBranch;
