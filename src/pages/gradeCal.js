import React, { useState, useEffect, Fragment } from "react";
const Gradecal = () => {
  var urlAPI = "https://reg-cmu-api.herokuapp.com/course/";

  const [inputFields, setInputFields] = useState([
    {
      courseID: ""
    }
  ]);
  const [courseDetail, setCourseDetail] = useState([
    {
      courseName: "",
      credit: ""
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    // searchcoure(inputFields);
  };
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "courseID") {
      values[index].courseID = event.target.value;
    }
    setInputFields(values);
    console.log(inputFields);
  };
  const handleAddFields = () => {
    const values = [...inputFields];
    const values2 = [...courseDetail];
    values.push({ courseID: "" });
    values2.push({ courseName: "", credit: "" });
    setInputFields(values);
    setCourseDetail(values2);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const searchcoure = index => {
    console.log(inputFields[index].courseID);
    var code = inputFields[index].courseID;
    const values = [...courseDetail];
    fetch(urlAPI + code)
      .then(Response => Response.json())
      .then(jsonData => {
        values[index].courseName = jsonData.courseName;
        values[index].credit = jsonData.courseCredit;
        setCourseDetail(values);
        console.log(jsonData);
        console.log(courseDetail);
      });
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
                  <button onClick={e => searchcoure(index)}>
                    {" "}
                    Searchcourse
                  </button>
                </div>
                <div class="column is-one-third">
                  <p>{courseDetail[index].courseName}</p>
                </div>
                <div class="column">
                  <p id="credit">{courseDetail[index].credit}</p>
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
