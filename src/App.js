import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/main_components/navbar";
import Home from "./pages/Home";
import "./App.css";
import todolist from "./pages/todolist";
import calendar from "./pages/calendar";
import schedule from "./pages/schedule";
import gradeCal from "./pages/gradeCal";
import account from "./pages/account";
import redirector from "./pages/redirector";
import ProtectedRoute from "./components/main_components/ProtectedRoute";
import { connect } from "react-redux";
const mapStateToProps = function (state) {
  return {
    message: "This is message from mapStateToProps",
    student_code: state.student_code,
  };
};
const App = ({ student_code }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/callback" component={redirector} />
      <Route exact path="/account" user={student_code} component={account} />
      <Route exact path="/" component={Home} />
      <ProtectedRoute
        exact
        user={student_code}
        path="/todolist"
        component={todolist}
      />
      <ProtectedRoute
        exact
        path="/calendar"
        user={student_code}
        component={calendar}
      />
      <ProtectedRoute
        exact
        path="/schedule"
        user={student_code}
        component={schedule}
      />
      <ProtectedRoute
        exact
        path="/gradecal"
        user={student_code}
        component={gradeCal}
      />
    </React.Fragment>
  );
};
const AppWithConnect = connect(mapStateToProps)(App);
export default AppWithConnect;
