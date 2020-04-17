import React from "react";
import "./css/table.css";
const Table = prop => {
    return (
        <div style={{ marginLeft: "100px" }}>
          <table id="customers">
            <tr>
              <td>
                <th><h2>FIRST YEAR</h2></th>
              </td>
            </tr>
            <tr>
              <th><h3>First Semester</h3></th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>001101</td>
              <td>Fundamental English 1</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>21</td>
            </tr>
          </table>
        </div>
    )
}
export default Table;