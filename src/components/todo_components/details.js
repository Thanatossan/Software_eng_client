import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Rating from "@material-ui/lab/Rating";
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
      priority_level: priority,
      deadline: startDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    });
  }, [
    detail,
    id,
    priority,
    props.awareSelect,
    props.selected.Todolist_id,
    props.selected.detail,
    props.selected.id,
    props.selected.title,
    props.selected.priority_level,
    startDate,
    title
  ]);
  const handleSubmit = e => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(data);
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
            onChange={e => setTitle(e.target.value)}
            // onChange={updateInputValue}
            id="title"
            defaultValue={checkNull(props.selected.title)}
          ></input>
          <h2> Description</h2>
          <textarea
            class="textarea"
            type="text"
            id="description"
            onChange={e => setDetail(e.target.value)}
            defaultValue={checkNull(props.selected.description)}
          ></textarea>
          <h2> End Date </h2>
          <div class="columns">
            <div class="column">
              <p> Current </p>
              <h5> Select new date</h5>
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
              {" "}
              <p> priority</p>
              <h5> Edit priority</h5>
            </div>
            <div class="column">
              <Rating
                name="read-only"
                value={props.selected.priority_level}
                onChange={(event, newValue) => {
                  setpriority(newValue);
                }}
                readOnly
              />
              <br></br>
              <div style={{ marginTop: "20px" }}>
                <Rating
                  name="simple-controlled"
                  value={priority}
                  onChange={(event, newValue) => {
                    setpriority(newValue);
                  }}
                />
              </div>
            </div>

            <br></br>

            <br></br>
          </div>
          <div class="has-text-right">
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
        </form>
      </div>
    </>
  );
};

export default Detail;
