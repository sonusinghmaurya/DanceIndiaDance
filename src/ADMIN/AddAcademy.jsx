import React, { useState } from "react";
import axiosInstance from "../HELPERS/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
const AddAcademy = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let token = window.localStorage.getItem("token");
  let [data, setData] = useState({
    academyName: "",
    contact: "",
    description: "",
    email: "",
  });
  let { academyName, contact, description, email } = data;

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
        academyName,
        contact,
        description,
        email,
      };
      let finalData = await axiosInstance.post(
        `/academies/saveacademy?managerId=${id} `,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(finalData);
      alert(`successfully registered academy with ${email} `);
      navigate("/adminDashboard/viewAcademy");
    } catch {
      console.log("unable to connect to server");
    }
  };
  return (
    <>
      <h1>Add Academy</h1>
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Add academy register form</h1>
          <br />
          <div className="input-group">
            <label htmlFor="username">academyName</label>
            <input
              type="text"
              id="academyName"
              name="academyName"
              onChange={handleData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleData} />
          </div>
          <div className="input-group">
            <label htmlFor="text">contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              onChange={handleData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">description</label>
            <input
              type="text"
              id="description"
              name="description"
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

export default AddAcademy;
