import React, { Fragment, Component, useState } from "react";
import Sidebar from "../components/todo_components/sidebar";
import List from "../components/todo_components/list";
import Detail from "../components/todo_components/details";
import "../components/todo_components/css/todolist.css";
// import "../components/todo_components/css/divider.sass";
const Todolist = () => {
  const [selected, select] = useState(0);
  return (
    <>
      <div class="columns">
        <div class="column is-1">
          <Sidebar />
        </div>
        <div class="column is-5">
          <List />
        </div>
        {/* <div class="is-divider-vertical"></div> */}

        <div class="column" style={{ margin: "30px" }}>
          <Detail />
        </div>
      </div>
    </>
  );
};

export default Todolist;
