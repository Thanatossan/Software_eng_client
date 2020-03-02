import React, { Fragment, Component } from "react";
import Todolist from "../components/main_components/todolist";
const Home = () => {
  return (
    <React.Fragment>
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
