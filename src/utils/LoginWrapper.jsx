import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AutContext";


export const LoginWrapper = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return !user ? <Outlet /> : <Navigate to="/" />;
};


