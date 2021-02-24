import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App username="mannuelf" />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals(console.log);
