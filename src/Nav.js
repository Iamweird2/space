import React from "react";
import Logo from "../src/assets/shared/Logo.svg";
import { NavLink } from "react-router-dom";
export default function Nav() {
  let activeStyle = {
    borderBottomColor: "white",
  };
  return (
    <>
      <nav className="nav">
        <span className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </span>
        <div className="transHeader">
          <NavLink
            to="/"
            className="navlink"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {" "}
            00 Home
          </NavLink>
          <NavLink
            to="/destination"
            className="navlink"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {" "}
            01 Destination{" "}
          </NavLink>
          <NavLink
            to="/crew"
            className="navlink"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {" "}
            02 Crew{" "}
          </NavLink>
          <NavLink
            to="/technology"
            className="navlink"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {" "}
            03 Technology{" "}
          </NavLink>
        </div>
        <div className="line"></div>
      </nav>
    </>
  );
}
