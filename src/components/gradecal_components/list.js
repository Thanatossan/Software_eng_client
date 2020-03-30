import React, { useState } from "react";
import "./css/list.css";
const List = () => {
  const [tasks, setTasks] = useState([
    {
      int: "261203",
      isCompleted: false
    },
    {
      int: "011212",
      isCompleted: false
    },
    {
      int: "212224",
      isCompleted: false
    }
  ]);
  const addTask = int => setTasks([...tasks, { int }]);

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
  return (
    <>
      <h1> GRADE CALCULATE</h1>
      {tasks.map((task, index) => (
        <div class="columns">
          <div class="column">
            <div class="box" style={{ width: "250px" }}>
              <div class="columns">
                <div class="column is-12">
                  <div
                    class={
                      task.isCompleted
                        ? "todo-text todo-completed"
                        : "todo-text"
                    }
                  >
                    <p> Subject Code : {task.int} <br />
                    Expected Grade : <input class="box" type="text" style={{ width: "80px" }}></input>
                    </p>
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
    </>
  );
};
export default List;

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {

    console.log(this.StaticRange, "$$$$");

    e.preventDefault();
    value && addTask(value);
    setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>Subject Code : 
        &#160;&#160;
        <input
          class="input"
          type="int"
          placeholder="input subject code"
          style={{ width: "100px" }}
          value_s={value}
          onChange={e => setValue(e.target.value)}
        ></input>

&#160;&#160;&#160;

        {/* Expected Grade : 
        &#160;&#160;
        <input
          class="input"
          type="text"
          placeholder="input expected grade"
          style={{ width: "100px" }}
          value_g={value}
          onChange={e => setValue(e.target.value)}
        ></input> */}

        <button class="button" type="submit">
          {" "}
          +
        </button>
        <hr />
        <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </div>
      </form>
    </>
  );
};
