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
          <a href="/" class="navbar-item leftborder">
            CALENDAR
          </a>
          <a href="/" class="navbar-item leftborder">
            GRADE CALCULATE
          </a>
          <a href="/" class="navbar-item leftborder">
            OBJECTIVE
          </a>
          <a href="/" class="navbar-item leftborder">
            ACCOUNT
          </a>
        </div>
      </nav>
    </>
  );
};
export default navbar;
