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
            <div id="trashbox" class="box" style={{backgroundColor: props.selected === task ? "#FFEAEA" : "#fff9f9"}}>
              <div class="columns">
                <div class="column is-12">
                  <div class={task.isComplete ? "todo-text todo-completed" : "todo-text"}>
                    <p class="subtitle is-4" onClick={() => {props.selectTask(index); // selectColor(index);
                      }}>
                      {" "}
                      {task.title}
                    </p>
                  </div>
                </div>
                <div class="column" style={{padding: "5px"}}>
                  <button onClick={() => props.removeTask(index)} id="trash" >
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
        <ul>
          <li id="addtask">
            <input  class="input is-large is-rounded" type="text" placeholder="Add Task" value={value} onChange={e => setValue(e.target.value)} ></input>
          </li>
          <li style={{paddingLeft: "10px"}}>
            {/* <div class="column" style={{ marginLeft: "470px" }}> */}
            <button id="bt"class="button is-large has-text-white is-rounded has-text-right" type="submit" style={{ backgroundColor: "#ffc30b" }} >
              {" "}
            add
          </button>
            {/* </div> */}
          </li>
        </ul>
      </form>
    </>
  );
};
