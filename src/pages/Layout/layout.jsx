import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../style/css/nav-bar.css";
import AuthContext from "../../context/AuthContext";
export function Layout() {
  const { logOut } = useContext(AuthContext);
  return (
    <div className="navWrapper">
      <ul className="nav-links">
        <li>
          <NavLink to="/">TasksBoard</NavLink>
        </li>
        <li className="center">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="upward">
          <a onClick={logOut} href="">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
