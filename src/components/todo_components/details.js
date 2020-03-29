import React from "react";

const Detail = props => {
  return (
    <>
      <div>
        <form>
          <h2>Title</h2>
          {/* <div class="box" style={{ width: "400px" }}>
          {" "}
          <p> Software Engineering Homework</p>{" "}
        </div> */}

          <input
            class="input is-rounded is-large"
            type="text"
            defaultValue={props.selected.text}
            style={{borderRadius: "25px"},{background: "#FFEAEA"}}
          ></input>
          <h2> Description</h2>
          
          <textarea
            class="textarea is-large is-rounded" rows="5"
            defaultValue={props.selected.detail}
            style={{background: "#FFEAEA"}}
          ></textarea>
          
          <h2> End Date </h2>
          <input
            class="input is-rounded is-large"
            type="text"
            defaultValue={props.selected.date}
            style={{background: "#ffeaea"}}
            
          ></input>
          <br></br>
          <br></br>
          <div style={{marginLeft: "550px"}}>
          <button class="button has-text-white is-rounded is-large" style={{ marginRight: "10px" },{color: "white"},{backgroundColor: "#ffc30b"}}>
            {" "}
            save
          </button>
          {/* <button class="button is-rounded is-large is-danger" style={{marginLeft: "20px"}}> delete</button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Detail;
