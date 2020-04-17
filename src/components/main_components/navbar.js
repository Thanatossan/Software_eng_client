import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu nav-center">
          <Link to="/" class="navbar-item navbar-tab-hover-color">
            HOME
          </Link>
          <Link to="/todolist" class="navbar-item leftborder">
            TO DO LIST
          </Link>
          <Link to="/calendar" class="navbar-item leftborder">
            CALENDAR
          </Link>
          <Link to="/gradecal" class="navbar-item leftborder">
            GRADE CALCULATE
          </Link>
          <Link to="/schedule" class="navbar-item leftborder">
            SUBJECT SCHEDULE
          </Link>
          <Link to="/account" class="navbar-item leftborder">
            ACCOUNT
          </Link>
        </div>
      </nav>
    </>
  );
};
export default navbar;
