import React from "react";
import "./css/navbar.css";
import { Link, NavLink } from "react-router-dom";
const navbar = () => {
  // function nongNavbar(){

  // }

  return (
    <>
      <nav class="navbar navbar-inner is-active" role="navigation" aria-label="main navigation">
        <div class="navbar-menu nav-center fontsize" id="myDemo">
          <NavLink id="link" exact to="/" class="" activeClassName="myactive">
            HOME
              </NavLink>
          <NavLink id="link" to="/todolist" class="" activeClassName="myactive" >
            TO DO LIST
              </NavLink>
              
          <NavLink id="link" to="/calendar" class="" activeClassName="myactive">
            CALENDAR
              </NavLink>
          <NavLink id="link" to="/gradecal" class="" activeClassName="myactive">
            GRADE CALCULATE
              </NavLink>
          <NavLink id="link" to="/schedule" class="" activeClassName="myactive">
            SUBJECT SCHEDULE
              </NavLink>
          <NavLink id="link" exact to="/" class="" activeClassName="myactive">
            OBJECTIVE
              </NavLink>
          <NavLink id="link" to="/account" class="" activeClassName="myactive">
            ACCOUNT
              </NavLink> 
              {/* <a href="/" class="navbar-item navbar-tab-hover-color">HOME</a>
              <a href="/todolist" class="navbar-item leftborder">TO DO LIST</a>
              <a href="/calendar" class="navbar-item leftborder">CALENDAR</a>
              <a href="/gradecal" class="navbar-item leftborder">GRADE CALCULATE</a>
              <a href="/schedule" class="navbar-item leftborder">SUBJECT SCHEDULE</a>
              <a href="/" class="navbar-item leftborder">OBJECTIVE</a>
              <a href="/account" class="navbar-item leftborder">ACCOUNT</a> */}
        </div>
      </nav>
    </>
  );
};
export default navbar;
