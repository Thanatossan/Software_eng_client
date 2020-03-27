import React, { useState } from "react";
import "./css/detail.css";
const Detail = props => {
  const [text, settext] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
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
            onChange={e => settext(e.target.value)}
            defaultValue={props.selected.text}
          ></input>
          <h2> Description</h2>
          <textarea
            class="textarea"
            onChange={e => setDetail(e.target.value)}
            defaultValue={props.selected.detail}
          ></textarea>
          <h2> End Date </h2>
          <input
            class="input"
            type="text"
            onChange={e => setDate(e.target.value)}
            defaultValue={props.selected.date}
          ></input>
          <div class="columns">
            <div class="column">
              <div class="rate" style={{ padding: "10px" }}>
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
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
