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
          <ul><li> <NavLink  exact to="/" class="" activeClassName="myactive">
            HOME
              </NavLink></li>
            <li> <NavLink  to="/todolist" class="" activeClassName="myactive" >
              TO DO LIST
              </NavLink></li>
            <li><NavLink  to="/calendar" class="" activeClassName="myactive">
              CALENDAR
              </NavLink></li>
            <li><NavLink  to="/gradecal" class="" activeClassName="myactive">
              GRADE CALCULATE
              </NavLink></li>
            <li>
              <NavLink  to="/schedule" class="" activeClassName="myactive">
                SUBJECT SCHEDULE
              </NavLink></li>
            <li> <NavLink  exact to="/" class="" activeClassName="myactive">
              OBJECTIVE
              </NavLink></li>
            <li><NavLink  to="/account" class="" activeClassName="myactive">
              ACCOUNT
              </NavLink> </li>
          </ul>

        </div>
      </nav>
    </>
  );
};
export default navbar;
