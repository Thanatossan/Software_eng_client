import React, { useState, useEffect, Fragment } from "react";
import select from "react-select";
const Gradecal = () => {
  var urlAPI = "https://reg-cmu-api.herokuapp.com/course/";
  const [expectedGrade, setExpectedgrade] = useState("");
  const [expectedCredit, setExpectedCredit] = useState("");
  const [currentCredit, setCurrentCredit] = useState("");
  const [currentGPA, setCurrentGPA] = useState("");
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
  const [grades, Setgrades] = useState([
    {
      grade: ""
    }
  ]);
  const handleSubmit = e => {
    e.preventDefault();
    //calculate grade here
    var overallcredit = 0;
    var overallgrade = 0;
    var nextgrade = 0;
    var nextCredit = 0;
    var expectGrade = 0;
    var sCredit = 0;
    grades.forEach((item, index) => {
      if (grades[index].grade === "-1") {
        console.log("W or U");
      }else if(grades[index].grade === "-2") {
        sCredit += parseInt(courseDetail[index].credit);
      }else {
        nextgrade += parseFloat(grades[index].grade)*parseInt(courseDetail[index].credit);
        nextCredit += parseInt(courseDetail[index].credit);
      }
    });

    overallcredit = parseInt(currentCredit) + nextCredit ;
    overallgrade = (parseFloat(currentGPA)*parseInt(currentCredit) + (nextgrade)) / overallcredit;
    // overallcredit += sCredit;
    if (!isNaN(overallcredit) && !isNaN(overallgrade)) {
      // expectGrade = Math.round(
      //   ((overallgrade / overallcredit + Number.EPSILON) * 100) / 100
      // );
      expectGrade = overallgrade ;
      expectGrade = expectGrade.toFixed(2);
      setExpectedgrade(expectGrade);
      setExpectedCredit(overallcredit+sCredit);
    }
    console.log(overallcredit);
    console.log(overallgrade);
    // expectGrade = Math.round(
    //   ((overallgrade / overallcredit + Number.EPSILON) * 100) / 100
    // );
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
    const values3 = [...grades];
    values.push({ courseID: "" });
    values2.push({ courseName: "", credit: "" });
    values3.push({ grade: "" });
    setInputFields(values);
    setCourseDetail(values2);
    Setgrades(values3);
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
  const handleInputGrade = (index, e) => {
    const values = [...grades];
    console.log(e.target.value);
    values[index].grade = e.target.value;
    Setgrades(values);
  };
  return (
    <>
      <div class="container">
        <h1> Grade Calculator</h1>

        <form onSubmit={handleSubmit}>
          <label for="lastGPA"> Current GPA : </label>
          <input
            type="text"
            id="lastGPA"
            name="lastGOA"
            onChange={e => {
              setCurrentGPA(e.target.value);
            }}
          ></input>

          <label for="currentCredit"> Current Credit : </label>
          <input
            type="text"
            id="currentCredit"
            name="currentCredit"
            onChange={e => {
              setCurrentCredit(e.target.value);
            }}
          ></input>
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
                <div class="column is-one-quarter">
                  <label for="expectGrade"> Grade: </label>
                  <div class="select">
                    <select onChange={e => handleInputGrade(index, e)}>
                      <option value="" selected disabled hidden></option>
                      <option value="4">A</option>
                      <option value="3.5">B+</option>
                      <option value="3">B</option>
                      <option value="2.5">C+</option>
                      <option value="2">C</option>
                      <option value="1.5">D+</option>
                      <option value="1.0">D</option>
                      <option value="0">F</option>

                      {/* don't calculate W,U */}
                      
                      <option value="-1">W</option>

                      {/*only add credit(s)*/}
                      <option value="-2">S</option> 

                      <option value="-1">U</option>

                    </select>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
          <div class="has-text-right" style={{ marginRight: "100px" }}>
            <button class="button is-rounded" type="submit">
              CALCULATE
            </button>
          </div>
        </form>
        {isNaN(expectedGrade) || expectedGrade === "" ? (
          <div></div>
        ) : (
          <div>
            <h2>Grade Expected : {expectedGrade}</h2>
            <h2>Credit : {expectedCredit} </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Gradecal;
