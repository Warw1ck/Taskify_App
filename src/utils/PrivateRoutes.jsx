import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const PrivateWrapper = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  if (user) {
    return <Outlet />;
  } else {
    navigate("/login");
    return null;
  }
};
