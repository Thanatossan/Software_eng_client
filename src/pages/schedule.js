import React, { useState, useEffect } from "react";
import { DisappearedLoading } from "react-loadingg";
import Table from "../components/schedule_components/table";
import Select from "../components/schedule_components/select";
var cpe_scd = "http://13.76.181.113:4000/api/schedule/get/cpe";
var isne_scd = "http://13.76.181.113:4000/api/schedule/get/isne";

const Schedule = () => {
  const [CPE, setCPE] = useState([]);
  const [ISNE, setISNE] = useState([]);

  useEffect(() => {
    fetch(cpe_scd)
      .then((res) => res.json())
      .then((CPE) => {
        setCPE(CPE);
      });
    fetch(isne_scd)
      .then((res) => res.json())
      .then((ISNE) => {
        setISNE(ISNE);
      });
  }, []);
  return (
    <div class="container">
      <h1>SUBJECT SCHEDULE</h1>
      {/* {CPE[0] === undefined ? <span></span> : <span>{CPE[0].semester}</span>} */}
      {/* <hr></hr>
      <span>{ISNE}</span> */}
      {CPE.map((cpe, index) => (
        <div>
          <h2>{index}</h2>
        </div>
      ))}
    </div>
  );
};
export default Schedule;
