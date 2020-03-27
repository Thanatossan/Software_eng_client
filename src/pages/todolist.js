import React, { Fragment, Component, useState } from "react";
import Sidebar from "../components/todo_components/sidebar";
import List from "../components/todo_components/list";
import Detail from "../components/todo_components/details";
import "../components/todo_components/css/todolist.css";
// import "../components/todo_components/css/divider.sass";
const Todolist = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Software Engineering Homework",
      isCompleted: false,
      detail: "Test",
      priority: 0,
      date: ""
    }
  ]);
  const [selected, select] = useState({
    text: "",
    isCompleted: false,
    detail: "",
    priority: 0,
    date: ""
  });
  const addTask = text => {
    const newTask = { text: text, isCompleted: false, detail: "", date: "" };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = index => {
    const newTask = [...tasks];
    newTask[index].isCompleted = !newTask[index].isCompleted;
    setTasks(newTask);
  };
  const removeTask = index => {
    const newTask = [...tasks];
    if (selected === newTask[index]) {
      select({
        text: "",
        isCompleted: false,
        detail: "",
        priority: 0,
        date: ""
      });
    }
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  const selectTask = index => {
    const newTask = [...tasks];
    // console.log(tasks);
    select(newTask[index]);
  };
  
  return (
    <>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-5">
          <List
            addTask={addTask}
            toggleTask={toggleTask}
            removeTask={removeTask}
            tasks={tasks}
            selectTask={selectTask}
          />
        </div>
        {/* <div class="is-divider-vertical"></div> */}

        <div class="column" style={{ margin: "30px" }}>
          <Detail selected={selected} tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default Todolist;
