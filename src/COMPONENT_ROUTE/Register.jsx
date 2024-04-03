import React, { useState } from "react";
import axiosInstance from "../HELPERS/AxiosInstance";
const Register = () => {
  let [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "",
  });
  let { userName, email, password, dob, phone, gender } = data;

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
        userName,
        email,
        password,
        dob,
        phone,
        gender,
      };
      let finalData = await axiosInstance.post("/users/save", payload);
      console.log(finalData);
      alert(`successfully registered with email ${email} as user`);
    } catch {
      console.log("unable to connect to server");
    }
  };
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="userName"
            onChange={handleData}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleData} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleData}
          />
        </div>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" onChange={handleData} />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" onChange={handleData} />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <div className="gender-options">
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                value={"male"}
                onChange={handleData}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value={"female"}
                onChange={handleData}
              />
              Female
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                id="other"
                name="gender"
                value={"other"}
                onChange={handleData}
              />
              Other
            </label>
          </div>
        </div>
        <button className="nor_button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
