import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/main_components/navbar";
import Todolist from "./components/main_components/todolist";
import "./App.css";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container columns">
        <div class="column">
          <Todolist />
        </div>
        <div class="column"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;
