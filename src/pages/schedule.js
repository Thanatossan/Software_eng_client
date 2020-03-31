import React, { useState, useEffect } from "react";

const schedule = () => {
  return (
    <React.Fragment>
      <div class="container ">
        <h1>SUBJECT SCHEDULE</h1>
        <div style={{ marginLeft: "300px" }}>
          <table id="customers">
            <tr>
              <td>
                <th>FIRST YEAR</th>
              </td>
            </tr>
            <tr>
              <th>First Semester</th>
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
              <td>206161</td>
              <td>Calculus for Engineering 1</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>207105</td>
              <td>Physics for Engineering and Agro-Industry Students 1</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>207115</td>
              <td>
                Physics Laboratory for Engineering and Agro-Industry Students 1
              </td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td>259104</td>
              <td>Engineering Drawing</td>
              <td>3(2-3-4)</td>
            </tr>
            <tr>
              <td>259106</td>
              <td>Workshop Technology</td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td>261103</td>
              <td>Basic Computer Engineering</td>
              <td>3(1-6-2)</td>
            </tr>
            <tr>
              <td>259191</td>
              <td>Learning Through Activities 1</td>
              <td>1(0-3-1)</td>
            </tr>
            <tr>
              <td></td>
              <td>
                General Education of Science and Mathematics or Humanities and
                Social Sciences
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>21</td>
            </tr>

            <tr>
              <th>Second Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>001102</td>
              <td>Fundamental English 2</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>206162</td>
              <td>Calculus for Engineering 2</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>207106</td>
              <td>Physics for Engineering and Agro-Industry Students 2</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>207116</td>
              <td>
                Physics Laboratory for Engineering and Agro-Industry Students 2
              </td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td>261102</td>
              <td>Computer Programming</td>
              <td>3(1-6-2)</td>
            </tr>
            <tr>
              <td></td>
              <td>
                General Education of Science and Mathematics or Humanities and
                Social Sciences
              </td>
              <td>6</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>19</td>
            </tr>

            <tr>
              <td>
                <th>SECOND YEAR</th>
              </td>
            </tr>
            <tr>
              <th>First Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>206261</td>
              <td>Calculus for Engineering 3</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>252211</td>
              <td>Electric Circuits 1</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261200</td>
              <td>Object-Oriented Programming</td>
              <td>3(2-3-4)</td>
            </tr>
            <tr>
              <td>261210</td>
              <td>Logic and Digital Circuits</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261212</td>
              <td>Logic and Digital Circuits Laboratory</td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td>261216</td>
              <td>Discrete Mathematics for Computer Engineers</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261217</td>
              <td>Data Structures for Computer Engineers</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>19</td>
            </tr>

            <tr>
              <th>Second Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>001201</td>
              <td>Critical Reading and Effective Writing</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261207</td>
              <td>Basic Computer Engineering Laboratory</td>
              <td>2(0-6-0)</td>
            </tr>
            <tr>
              <td>261208</td>
              <td>Numerical Computation for Engineers</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261214</td>
              <td>Microprocessor and Interfacing</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261215</td>
              <td>Embedded System Laboratory</td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td>261218</td>
              <td>Algorithms for Computer Engineers</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261332</td>
              <td>Data and Computer Communications</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>18</td>
            </tr>

            <tr>
              <td>
                <th>THIRD YEAR</th>
              </td>
            </tr>
            <tr>
              <th>First Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>261304</td>
              <td>Computer Architecture</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261335</td>
              <td>Computer Networks</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261336</td>
              <td>Computer Networks Laboratory</td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td>261342</td>
              <td>Fundamentals of Database Systems</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261343</td>
              <td>DATABASE SYSTEM LABORATORY</td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td></td>
              <td>
                General Education of Science and Mathematics or Humanities and
                Social Sciences
              </td>
              <td>6</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>17</td>
            </tr>

            <tr>
              <th>Second Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>001225</td>
              <td>English in Science and Technology Context</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>259194</td>
              <td>Learning Through Activities 4</td>
              <td>1(0-3-1)</td>
            </tr>
            <tr>
              <td>261305</td>
              <td>Operating Systems</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261306</td>
              <td>Computer Engineering Probability and Statistics</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261361</td>
              <td>Software Engineering</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td></td>
              <td>Major Elective</td>
              <td>6</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>19</td>
            </tr>

            <tr>
              <td>
                <th>FORTH YEAR</th>
              </td>
            </tr>
            <tr>
              <th>First Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>261405</td>
              <td>Advanced Computer Engineering Technology</td>
              <td>3(3-0-6)</td>
            </tr>
            <tr>
              <td>261491</td>
              <td>Project Survey</td>
              <td>1(0-3-0)</td>
            </tr>
            <tr>
              <td></td>
              <td>Major Elective</td>
              <td>9</td>
            </tr>
            <tr>
              <td></td>
              <td>Free Elective</td>
              <td>3</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>16</td>
            </tr>

            <tr>
              <th>Second Semester</th>
            </tr>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>CREDITS</th>
            </tr>
            <tr>
              <td>259192</td>
              <td>Learning Through Activities 2</td>
              <td>1(0-3-1)</td>
            </tr>
            <tr>
              <td>261492</td>
              <td>Project</td>
              <td>3(0-9-0)</td>
            </tr>
            <tr>
              <td></td>
              <td>Major Elective</td>
              <td>3</td>
            </tr>
            <tr>
              <td></td>
              <td>Free Elective</td>
              <td>3</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>10</td>
            </tr>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
