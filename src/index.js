import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";

const myName = "mannuelf";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App username={myName} surname="ferreira" />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
