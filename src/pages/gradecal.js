import React, { Fragment, Component, useState } from "react";
import Sidebar from "../components/gradecal_components/sidebar";
import Subj from "../components/gradecal_components/subj";
import Detail from "../components/gradecal_components/details";
import "../components/gradecal_components/css/gradecal.css";
const gradecal = () => {
  return (
    <>
      <div class="columns">
        <div class="column is-1">
          <Sidebar />
        </div>
        <div>
          <Subj />
        </div>
      </div>
    </>
  );
};

export default gradecal;