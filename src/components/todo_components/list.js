import React from "react";
import "./css/list.css";
const list = () => {
  return (
    <>
      <h1> TO DO LIST</h1>
      <div class="columns">
        <div class="column is-1" style={{ marginTop: "10px" }}>
          <button class="button is-rounded"> </button>
        </div>
        <div class="column">
          {/* <button
            class="button is-static is-rounded"
            style={{
              width: "400px",
              backgroundColor: "#FFEAEA",
              textAlign: "left"
            }}
          >
            {" "}
            Software Engineering Homework{" "}
          </button> */}
          <div class="box" style={{ width: "400px" }}>
            <p> Software Engineering Homework</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default list;
