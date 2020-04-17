import React, { useState, useEffect } from "react";
import { DisappearedLoading } from "react-loadingg";
import Table from "../components/schedule_components/table";
import Select from "../components/schedule_components/select";
var cpe_scd = "http://13.76.181.113:4000/api/schedule/get/cpe";
var isne_scd = "http://13.76.181.113:4000/api/schedule/get/isne";

const Schedule = () => {
  const [CPE, setCPE] = useState([]);
  const [ISNE, setISNE] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(cpe_scd)
      .then(res => res.json())
      .then(
        (CPE) => {
          setIsLoaded(true);
          setCPE(CPE);
        }
      )
    fetch(isne_scd)
      .then(res => res.json())
      .then(
        (ISNE) => {
          setIsLoaded(true);
          setISNE(ISNE);
        }
      )
  });

  var cpe_obj = JSON.stringify(CPE)
  var cpe_data = JSON.parse(cpe_obj)

  var isne_obj = JSON.stringify(ISNE)
  var isne_data = JSON.parse(isne_obj)

  return (
    <div class="container">
      <h1>SUBJECT SCHEDULE</h1>
      <Select/>
      <span>{cpe_obj}</span>
      <hr></hr>
      <span>{isne_obj}</span>
    </div>
  );
};
export default Schedule;