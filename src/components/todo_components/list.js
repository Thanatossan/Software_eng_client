import React, { useState } from "react";
import "./css/list.css";
const List = props => {
  // const [tasks, setTasks] = useState([
  //   {
  //     text: "Software Engineering Homework",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Os report",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Do laundry",
  //     isCompleted: false
  //   }
  // ]);
  // const addTask = text => setTasks([...tasks, { text }]);

  // const toggleTask = index => {
  //   const newTask = [...tasks];
  //   newTask[index].isCompleted = !newTask[index].isCompleted;
  //   setTasks(newTask);
  // };
  // const removeTask = index => {
  //   const newTask = [...tasks];
  //   newTask.splice(index, 1);
  //   setTasks(newTask);
  // };
  return (
    <>
      <h1> TO DO LIST</h1>
      {props.tasks.map((task, index) => (
        // <Listtodo taskname={task.text} index={index} />
        <div class="columns">
          <div class="column is-1" style={{ marginTop: "10px" }}>
            <button
              class="button is-rounded"
              onClick={() => props.toggleTask(index)}
            >
              {" "}
            </button>
          </div>
          <div class="column">
            <div class="box" style={{ width: "400px" }}>
              <div class="columns">
                <div class="column is-12">
                  <div
                    class={
                      task.isCompleted
                        ? "todo-text todo-completed"
                        : "todo-text"
                    }
                  >
                    <p onClick={() => props.selectTask(index)}> {task.text}</p>
                  </div>
                </div>
                <div class="column">
                  <button onClick={() => props.removeTask(index)}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <AddTaskForm addTask={props.addTask} />
    </>
  );
};
export default List;

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          class="input"
          type="text"
          placeholder="Add Task"
          style={{ width: "400px" }}
          value={value}
          onChange={e => setValue(e.target.value)}
        ></input>
        <button class="button" type="submit">
          {" "}
          add
        </button>
      </form>
    </>
  );
};
