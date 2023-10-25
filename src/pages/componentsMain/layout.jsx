import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../style/css/nav-bar.css'
import AuthContext from "../../context/AutContext";
export function Layout() {
    const {logOut} = useContext(AuthContext)
  return (
    <ul className="nav-links">
        <li><NavLink href="/">TasksBoard</NavLink></li>
        <li className="center"><NavLink href="/profile">Profile</NavLink></li>
        <li className="upward"><a onClick={logOut}href="">Logout</a></li>
    </ul>
    
  );
}
