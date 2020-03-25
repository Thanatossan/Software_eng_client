import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./css/detail.css";
import "react-datepicker/dist/react-datepicker.css";

const Detail = props => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [priority, setpriority] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = e => {
    e.preventDefault();
  };
  const checkNull = value => {
    if (value === null) {
      return "";
    } else {
      return value;
    }
  };
  console.log(props.selected.Todolist_id);
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
            onChange={e => setTitle(e.target.value)}
            defaultValue={checkNull(props.selected.title)}
          ></input>
          <h2> Description</h2>
          <textarea
            class="textarea"
            onChange={e => setDetail(e.target.value)}
            defaultValue={checkNull(props.selected.description)}
          ></textarea>
          <h2> End Date </h2>
          {/* <input
            class="input"
            type="text"
            onChange={e => setDate(e.target.value)}
            defaultValue={checkNull(props.selected.deadline)}
          ></input> */}

          <DatePicker
            showPopperArrow={false}
            selected={startDate}
            onChange={date => setStartDate(date)}
          />

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
              <h2>{title}</h2>
              <button class="button" style={{ marginRight: "10px" }}>
                {" "}
                save
              </button>
              <button class="button"> delete</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Detail;
