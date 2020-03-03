import React, { useState } from "react";
import Detail from "./details";
import "./css/list.css";
const List = () => {
  const [selected, select] = useState({
    text: "",
    detail: "",
    date: ""
  });
  const [tasks, setTasks] = useState([
    {
      text: "Software Engineering Homework",
      isCompleted: false,
      detail: "Project presented Now!!",
      date: ""
    },
    {
      text: "Os report",
      isCompleted: false,
      detail: "due 20 maybe",
      date: ""
    },
    {
      text: "Do laundry",
      isCompleted: false,
      detail: "Not enought money",
      date: ""
    }
  ]);
  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTask = [...tasks];
    newTask[index].isCompleted = !newTask[index].isCompleted;
    setTasks(newTask);
  };
  const removeTask = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  const selectTask = index => {
    const newTask = [...tasks];
    select(newTask[index]);
  };
  return (
    <>
      <div class="column is-5">
        <h1> TO DO LIST</h1>
        {tasks.map((task, index) => (
          // <Listtodo taskname={task.text} index={index} />
          <div class="columns">
            <div class="column is-1" style={{ marginTop: "10px" }}>
              <button
                class="button is-rounded"
                onClick={() => toggleTask(index)}
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
                      <p onClick={() => selectTask(index)}> {task.text}</p>
                    </div>
                  </div>
                  <div class="column">
                    <button onClick={() => removeTask(index)}>
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <AddTaskForm addTask={addTask} />
      </div>
      <div class="column" style={{ margin: "30px" }}>
        <form>
          <div>
            <h2>Title</h2>
            <div class="box" style={{ width: "400px" }}>
              {" "}
              <p> {selected.text}</p>{" "}
            </div>
            <h2> Description</h2>
            <textarea
              class="textarea"
              value={selected.detail}
              onChange={e => select(e.target.value)}
            >
              {selected.detail}
            </textarea>
            <h2> End Date </h2>
            <input class="input" placeholder="Date"></input>
            <br />
            <br />
            <button class="button"> Save </button>
          </div>
        </form>
      </div>
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
          placeholder="add task"
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
