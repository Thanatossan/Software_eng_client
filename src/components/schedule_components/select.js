import React from "react";
import "./css/select.css";
import Table from "./table";
const Select = prop => {
    function Show() {
        
    }

    return (
        <div class="columns">
            <div class="column column is-5" >
                <label>MAJOR : </label>
                {" "}
                <select id="major" style={{ backgroundColor: "#C5C5C5" }}>
                    <option value="CE">Civil Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="MEI">Mechanical Engineering (International Program)</option>
                    <option value="EE">Electrical Engineering</option>
                    <option value="IE">Industrial Engineering</option>
                    <option value="CPE">Computer Engineering</option>
                    <option value="ISNE">Information Systems and Network Engineering</option>
                    <option value="ENVI">Environmental Engineering</option>
                    <option value="MN">Mining Engineering</option>
                </select>
                {" "}
                <button type="enter" onClick={Show}>Enter</button>
            </div>
        </div>
    )
}
export default Select;
