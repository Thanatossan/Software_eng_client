import React from "react";
import Sidebar from "../components/todo_components/sidebar";
import List from "../components/todo_components/list";
import Detail from "../components/todo_components/details";
import "../components/todo_components/css/todolist.css";
const todolist = () => {
  return (
    <>
      <div class="columns">
        <div class="column is-1">
          <Sidebar />
        </div>
        <div class="column is-5">
          <List />
        </div>
        {/* <div class="is-divider-vertical" data-content="OR"></div> */}
        <div class="column ">
          <Detail />
        </div>
      </div>
    </>
  );
};

export default todolist;
