import React, { useState, useEffect, Fragment } from "react";
const Gradecal = () => {
  var urlAPI = "https://reg-cmu-api.herokuapp.com/course/";

  const [inputFields, setInputFields] = useState([
    {
      courseID: ""
    }
  ]);

  const [courseName, setCourseName] = useState("");
  const [Credit, setCredit] = useState("");
  const searchcoure = code => {
    fetch(urlAPI + code)
      .then(Response => Response.json())
      .then(jsonData => {
        setCourseName(jsonData.courseName);
        setCredit(jsonData.courseCredit);
      });
  };
  const handleSubmit = e => {
    e.preventDefault();
    searchcoure(inputFields);
  };
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "courseID") {
      values[index].courseID = event.target.value;
    }
    setInputFields(values);
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ courseID: "" });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <>
      <div class="container">
        <h1> Grade Calculator</h1>

        <form onSubmit={handleSubmit}>
          <label for="lastGPA"> Current GPA : </label>
          <input type="text" id="lastGPA" name="lastGOA"></input>
          <br></br>
          <br></br>
          {inputFields.map((inputFields, index) => (
            <Fragment key={`${inputFields}~${index}`}>
              <div class="columns">
                <div class="column is-half">
                  <button
                    className="btn btn-link"
                    type="button"
                    onClick={() => handleAddFields()}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-link"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    -
                  </button>

                  <label for="courseID"> Course ID : </label>
                  <input
                    type="text"
                    id="courseID"
                    className="form-control"
                    name="courseID"
                    value={inputFields.courseID}
                    onChange={e => handleInputChange(index, e)}
                  ></input>
                  <button type="submit" onSubmit={handleSubmit}>
                    {" "}
                    Searchcoure
                  </button>
                </div>
                <div class="column is-one-third">
                  <p>{courseName}</p>
                </div>
                <div class="column">
                  <p id="credit">{Credit}</p>
                </div>
                <div class="column is-one-third">
                  <label for="expectGrade"> Grade: </label>
                  <input
                    type="text"
                    id="expectGrade"
                    className="form-control"
                    name="expectGrade"
                    style={{ width: "30px" }}
                  ></input>
                </div>
              </div>
            </Fragment>
          ))}
        </form>
      </div>
    </>
  );
};

export default Gradecal;
