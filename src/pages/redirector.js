import React, { useState, useEffect } from "react";
import { DisappearedLoading } from "react-loadingg";
import { Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import { login } from "../actions";
// useEffect = () => {
//   async function getData(code, currentLogin) {
//     var { data } = await Axios.post(
//       "https://oauth.cmu.ac.th/v1/GetToken.aspx",
//       null,
//       {
//         params: {
//           code: code,
//           redirect_uri: "http://localhost:3000/callback",
//           client_id: "g3xcpyFcFNHH7g65uyxJJg7PXQWjjUCR47makKkd",
//           client_secret: "UQ4r1B2QyM3Nz2ha5VsJPw4Yj2Qa66WUnt15nTXv",
//           grant_type: "authorization_code",
//         },
//       }
//     );
//     //   return data;
//     var body = await Axios.get(
//       "https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo",
//       {
//         headers: {
//           Authorization: `Bearer ${data.access_token}`,
//         },
//       }
//     );
//     var studentID = await body.data.student_id;
//     await Axios.post("http://13.76.181.113/api/users/login/" + studentID, body);
//     await setLogin(studentID);

//     return studentID;
//   }
// };
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const mapStateToProps = function (state) {
  return {
    message: "This is message from mapStateToProps",
    student_code: state.student_code,
  };
};

const Redirector = ({ message, student_code, dispatch }) => {
  let query = useQuery();
  var code = query.get("code");
  useEffect(() => {
    async function getData(code) {
      var { data } = await Axios.post(
        "https://oauth.cmu.ac.th/v1/GetToken.aspx",
        null,
        {
          params: {
            code: code,
            redirect_uri: "http://localhost:3000/callback",
            client_id: "g3xcpyFcFNHH7g65uyxJJg7PXQWjjUCR47makKkd",
            client_secret: "UQ4r1B2QyM3Nz2ha5VsJPw4Yj2Qa66WUnt15nTXv",
            grant_type: "authorization_code",
          },
        }
      );
      //   return data;
      var body = await Axios.get(
        "https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo",
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );
      var studentID = await body.data.student_id;

      await Axios.post(
        "http://13.76.181.113/api/users/login/" + studentID,
        body.data
      ).then(() => {
        dispatch(login(studentID));
      });
    }
    getData(code);
  }, [code, dispatch]);
  var data = login;

  return (
    // <> {student_code}</>
    <>{data === null ? <DisappearedLoading /> : <Redirect to="/account" />}</>
  );
};
const RedirectWithConnect = connect(mapStateToProps)(Redirector);
// export default Redirector;
export default RedirectWithConnect;
