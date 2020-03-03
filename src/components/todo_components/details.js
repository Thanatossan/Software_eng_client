import React from "react";

const Detail = props => {
  return (
    <>
      <div>
        <h2>Title</h2>
        <div class="box" style={{ width: "400px" }}>
          {" "}
          <p> {props.selectedTask}</p>{" "}
        </div>
        <h2> Description</h2>
        <textarea class="textarea"></textarea>
        <h2> End Date </h2>
        <input class="input" placeholder="Date"></input>
      </div>
    </>
  );
};

export default Detail;
