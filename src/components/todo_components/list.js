import React, { useState } from "react";
import "./css/list.css";
const List = props => {
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
                      task.isComplete ? "todo-text todo-completed" : "todo-text"
                    }
                  >
                    <p
                      onClick={() => {
                        props.selectTask(index);
                      }}
                    >
                      {" "}
                      {task.title}
                    </p>
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
          class="input is-large is-rounded"
          type="text"
          placeholder="Add Task"
          style={{ width: "510px" }}
          value={value}
          onChange={e => setValue(e.target.value)}
        ></input>
        <div class="column" style={{ marginLeft: "470px" }}>
          <button
            class="button is-large has-text-white is-rounded has-text-right"
            type="submit"
            style={{ backgroundColor: "#ffc30b" }}
          >
            {" "}
            add
          </button>
        </div>
      </form>
    </>
  );
};
