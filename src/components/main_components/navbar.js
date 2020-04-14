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
          <ul><li> <NavLink id="link" exact to="/" activeClassName="myactive">
            HOME
              </NavLink></li>
            <li> <NavLink  id="link" to="/todolist" activeClassName="myactive" >
              TO DO LIST
              </NavLink></li>
            <li><NavLink  id="link" to="/calendar" activeClassName="myactive">
              CALENDAR
              </NavLink></li>
            <li><NavLink  id="link" to="/gradecal" activeClassName="myactive">
              GRADE CALCULATE
              </NavLink></li>
            <li>
              <NavLink  id="link" to="/schedule" activeClassName="myactive">
                SUBJECT SCHEDULE
              </NavLink></li>
            <li> <NavLink id="link" exact to="/" activeClassName="myactive">
              OBJECTIVE
              </NavLink></li>
            <li><NavLink id="link" to="/account" activeClassName="myactive">
              ACCOUNT
              </NavLink> </li>
          </ul>

        </div>
      </nav>
    </>
  );
};
export default navbar;
