import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Basic from "./examples/basic";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Basic />, document.getElementById("root"));
registerServiceWorker();
