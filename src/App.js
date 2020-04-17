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

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/callback" component={redirector} />
      <Route exact path="/account" component={account} />
      <Route exact path="/" component={Home} />
      <Route exact path="/todolist" component={todolist} />
      <Route exact path="/calendar" component={calendar} />
      <Route exact path="/schedule" component={schedule} />
      <Route exact path="/gradecal" component={gradeCal} />
    </React.Fragment>
  );
};

export default App;
