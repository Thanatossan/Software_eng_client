import React, { useState, useEffect } from "react";
import { DisappearedLoading } from "react-loadingg";
// import Sidebar from "../components/todo_components/sidebar";
import List from "../components/todo_components/list";
import Detail from "../components/todo_components/details";
import "../components/todo_components/css/todolist.css";

// import "../components/todo_components/css/divider.sass";
var url_show = "http://13.76.181.113/api/todolist/showtitle";
var url_delete = "http://13.76.181.113/api/todolist/deleted";
var url_added = "http://13.76.181.113/api/todolist/added";
var studentid = "/600610781";

const Todolist = () => {
  const [isReload, setReload] = useState(false);
  const [awareSelect, setAware] = useState(false);
  const [isSelect, setSelect] = useState(false);

  const [tasks, setTasks] = useState([
    {
      Todolist_id: "",
      title: "",
      isComplete: "",
      description: "",
      priority_level: 0,
      deadline: new Date(),
    },
  ]);

  const [selected, select] = useState({
    Todolist_id: "",
    title: "",
    isComplete: false,
    description: "",
    priority_level: 0,
    deadline: new Date().toISOString().slice(0, 19).replace("T", " "),
  });

  useEffect(() => {
    fetch(url_show + studentid)
      .then((Response) => Response.json())
      .then((jsonData) => {
        setTasks(jsonData);
        select({
          Todolist_id: "",
          title: "",
          isComplete: false,
          description: "",
          priority_level: 0,
          deadline: new Date().toISOString().slice(0, 19).replace("T", " "),
        });
        setReload(false);
      });
  }, [isReload]);

  const editTask = () => {
    setReload(true);
    // const newTask = [...tasks];
  };
  const addTask = (title) => {
    setReload(true);
    const newTask = {
      Todolist_id: "",
      title: title,
      isComplete: false,
      description: "",
      deadline: new Date().toISOString().slice(0, 19).replace("T", " "),
    };
    var post_data = {
      title: title,
      isComplete: 0,
    };
    fetch(url_added + studentid, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post_data),
    });

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (index) => {
    const newTask = [...tasks];
    newTask[index].isComplete = !newTask[index].isComplete;
    setTasks(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...tasks];
    if (selected === newTask[index]) {
      select({
        Todolist_id: 0,
        title: "",
        isComplete: false,
        description: "",
        priority_level: 0,
        deadline: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
    }
    // console.log(newTask[index].Todolist_id);
    setReload(true);
    fetch(url_delete + "/" + newTask[index].Todolist_id, {
      method: "delete",
    });
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  const selectTask = (index) => {
    const newTask = [...tasks];
    // setSelect(true);
    select(newTask[index]);
    setAware(!awareSelect);
    // console.log(selected);
  };

  if (isReload) return <DisappearedLoading />;
  else
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
              selected={selected}
              selectTask={selectTask}
            />
          </div>
          {/* <div class="is-divider-vertical"></div> */}

          <div class="column" style={{ margin: "30px" }}>
            <Detail
              selected={selected}
              tasks={tasks}
              reset={setReload}
              awareSelect={awareSelect}
              editTask={editTask}
            />
          </div>
        </div>
      </>
    );
};

export default Todolist;
