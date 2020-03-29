import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./css/detail.css";
import "react-datepicker/dist/react-datepicker.css";
var url = "http://13.76.181.113/api/todolist/updated/";
const Detail = props => {
  const [check, hascheck] = useState(false);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [priority, setpriority] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [editedTask, SetEditTask] = useState({
    title: "",
    description: "",
    priority_level: "",
    deadline: new Date()
  });

  useEffect(() => {
    setId(props.selected.Todolist_id);
    SetEditTask({
      title: title,
      description: detail,
      priority: priority,
      deadline: startDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    });
  }, [
    detail,
    priority,
    props.awareSelect,
    props.selected.Todolist_id,
    props.selected.detail,
    props.selected.id,
    props.selected.title,
    startDate,
    title
  ]);
  const EditTaskForm = ({ editTask }) => {
    const [editedTask, SetEditTask] = useState({
      title: "",
      description: "",
      priority_level: "",
      deadline: new Date()
    });
    const handleSubmit2 = e => {
      editedTask && editTask(editedTask);
      SetEditTask({
        title: "",
        description: "",
        priority_level: "",
        deadline: new Date()
      });
    };
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    props.editTask();
    SetEditTask({
      title: title,
      description: detail,
      priority: priority,
      deadline: startDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    });

    fetch(url + id, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    });
    alert("updated");
  };
  const checkNull = value => {
    if (value === null) {
      return "";
    } else {
      return value;
    }
  };
  const defaultTime = k => {
    var d =
      k.substring(0, 4) + "/" + k.substring(5, 7) + "/" + k.substring(8, 10);
    return d;
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Title</h2>
          {/* <div class="box" style={{ width: "400px" }}>
          {" "}
          <p> Software Engineering Homework</p>{" "}
        </div> */}

          <input
            class="input"
            type="text"
            // value={editedTask.title}
            // onChange={e => setTitle(e.target.value)}
            // onChange={updateInputValue}
            id="title"
            defaultValue={checkNull(props.selected.title)}
          ></input>
          <h2> Description</h2>
          <textarea
            class="textarea"
            type="text"
            id="description"
            // onChange={e => setDetail(e.target.value)}
            defaultValue={checkNull(props.selected.description)}
          ></textarea>
          <h2> End Date </h2>
          <div class="columns">
            <div class="column">
              <p> Current </p>
              <h5> Select</h5>
            </div>
            <div class="column">
              <p>{defaultTime(props.selected.deadline)} </p>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                showPopperArrow={false}
                selected={startDate}
                onChange={date => {
                  setStartDate(date);
                  hascheck(true);
                }}
              />
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="rate" style={{ padding: "10px" }}>
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  value="5"
                  onClick={() => setpriority(5)}
                />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input
                  type="radio"
                  id="star4"
                  name="rate"
                  value="4"
                  onClick={() => setpriority(4)}
                />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input
                  type="radio"
                  id="star3"
                  name="rate"
                  value="3"
                  onClick={() => setpriority(3)}
                />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input
                  type="radio"
                  id="star2"
                  name="rate"
                  value="2"
                  onClick={() => setpriority(2)}
                />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input
                  type="radio"
                  id="star1"
                  name="rate"
                  value="1"
                  onClick={() => setpriority(1)}
                />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
            <br></br>
            <br></br>
            <div
              class="column"
              style={{ marginTop: "80px", marginLeft: "300px" }}
            >
              {" "}
              <button
                class="button"
                type="submit"
                style={{ marginRight: "10px" }}
              >
                {" "}
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Detail;
