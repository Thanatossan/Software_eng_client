import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/main_components/navbar";
import Home from "./pages/Home";
import "./App.css";
import todolist from "./pages/todolist";
import gradecal from "./pages/gradecal";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/todolist" component={todolist} />
      <Route exact path="/gradecal" component={gradecal} />

    </React.Fragment>
  );
};

export default App;
