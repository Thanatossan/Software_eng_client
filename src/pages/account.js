import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../actions";
import Axios from "axios";
const mapStateToProps = function (state) {
  return {
    message: "This is message from mapStateToProps",
    student_code: state.student_code,
  };
};

const Account = ({ student_code, dispatch }) => {
  const [detail, setDetail] = useState({
    id: 0,
    cmuitaccount_name: "",
    cmuitaccount: "",
    student_id: 0,
    prename_id: "",
    prename_TH: "",
    prename_EN: "",
    firstname_TH: "",
    firstname_EN: "",
    lastname_TH: "",
    lastname_EN: "",
    organization_code: 0,
    organization_name_TH: "",
    organization_name_EN: "",
    itaccounttype_id: "",
    itaccounttype_TH: "",
    itaccounttype_EN: "",
  });
  const handleClick = () => {
    dispatch(logout());
    window.location = "http://localhost:3000/";
  };
  useEffect(() => {
    async function getData(code) {
      var { data } = await Axios.get(
        "http://13.76.181.113:4000/api/users/get/" + code
      );
      await setDetail(data[0]);
    }
    getData(student_code);
  }, [student_code, detail]);

  return (
    <React.Fragment>
      <div class="container">
        <h1>ACCOUNT</h1>
        <div class="columns is-mobile is-centered">
          <div class="column is-half">
            <div class="card" style={{ borderRadius: "25px" }}>
              <div class="card-content">
                {detail === undefined ? (
                  <div> </div>
                ) : (
                  <div>
                    <p class="title is-size-4">CMU Account</p>
                    <p class="title has-text-grey is-size-5">
                      {detail.cmuitaccount}
                    </p>
                    <p class="title is-size-4">First name</p>
                    <p class="title has-text-grey is-size-5">
                      {detail.firstname_TH}
                    </p>
                    <p class="title is-size-4">Last name</p>
                    <p class="title has-text-grey is-size-5">
                      {detail.lastname_TH}
                    </p>
                    <p class="title is-size-4">Student Code</p>
                    <p class="title has-text-grey is-size-5">{student_code}</p>
                    <p class="title is-size-4">Faculty</p>
                    <p class="title has-text-grey is-size-5">
                      {detail.organization_name_TH}
                    </p>
                    <p class="title is-size-4">Status</p>
                    <p class="title has-text-grey is-size-5">
                      {detail.itaccounttype_TH}
                    </p>
                  </div>
                )}
              </div>
              <div class="columns">
                <div class="column is-four-fifths"></div>
                <div class="column">
                  <div class="card-content">
                    <button
                      class="button is-large has-text-white is-danger is-rounded "
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      LOGOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const AccountWithConnect = connect(mapStateToProps)(Account);
export default AccountWithConnect;
