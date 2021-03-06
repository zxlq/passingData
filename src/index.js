import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Parent from "./Parent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  rootElement
);
