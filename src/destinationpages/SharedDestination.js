import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function MiniNav() {
    let activeStyle = {
      borderBottomColor: "white",
    };
  return (
    <>
      <h1 className="destination-head">01 Pick your destination</h1>

      <nav className="destination-nav">
        <NavLink
          to="/destination"
          className="destination-nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)} end={true}
        >
          Moon
        </NavLink>
        <NavLink
          to="mars"
          className="destination-nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Mars
        </NavLink>
        <NavLink
          to="europa"
          className="destination-nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Europa
        </NavLink>
        <NavLink
          to="titan"
          className="destination-nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Titan
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
