import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";


export const LoginWrapper = () => {
  const {user} = useContext(AuthContext)
  return !user ? <Outlet /> : <Navigate to="/" />;

};


