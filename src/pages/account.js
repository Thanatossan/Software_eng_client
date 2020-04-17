import React from "react";
import { connect } from "react-redux";
const mapStateToProps = function (state) {
  return {
    message: "This is message from mapStateToProps",
    student_code: state.student_code,
  };
};

const Account = ({ student_code }) => {
  return (
    <React.Fragment>
      <div class="container columns">
        <div class="column">
          <h2> account page</h2>
          <h2>{student_code}</h2>
        </div>
        <div class="column"></div>
      </div>
    </React.Fragment>
  );
};
const AccountWithConnect = connect(mapStateToProps)(Account);
export default AccountWithConnect;
