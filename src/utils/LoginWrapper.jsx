import React, {useContext} from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


export const LoginWrapper = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  console.log(user)
  if (!user) {
    return <Outlet />;
  } else {
    navigate("/");
    return null;
  }
};


