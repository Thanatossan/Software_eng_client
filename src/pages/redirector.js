import React, { useState } from "react";
import { DisappearedLoading } from "react-loadingg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
  useLocation,
} from "react-router-dom";
import Axios from "axios";

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
  await Axios.post("http://13.76.181.113/api/users/login/" + studentID, body);
  return studentID;
}
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const Redirector = (props) => {
  let query = useQuery();
  var code = query.get("code");
  var data = getData(code);

  return (
    <>{data === null ? <DisappearedLoading /> : <Redirect to="/account" />}</>
  );
};
export default Redirector;
