import React from "react";
import { Navigate } from "react-router-dom";
const Protected_route = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <>{children}</>;
  } else {
    return (
      <>
        {alert("please login to views home page")}
        <Navigate to="/login" />
      </>
    );
  }
};

export default Protected_route;
