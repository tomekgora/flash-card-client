import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "semantic-ui-less/semantic.less";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
