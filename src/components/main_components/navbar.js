import React from "react";
import "./css/navbar.css";
const navbar = () => {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu nav-center">
          <a href="/" class="navbar-item navbar-tab-hover-color">
            HOME
          </a>

          <a href="/" class="navbar-item">
            TO DO LIST
          </a>
          <a href="/" class="navbar-item">
            CALENDAR
          </a>
          <a href="/" class="navbar-item">
            GRADE CALCULATE
          </a>
          <a href="/" class="navbar-item">
            OBJECTIVE
          </a>
          <a href="/" class="navbar-item">
            ACCOUNT
          </a>
        </div>
      </nav>
    </>
  );
};
export default navbar;
