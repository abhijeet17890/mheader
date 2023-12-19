import React from "react";
import ReactDOM from "react-dom";

import MHeader from "./components/MHeader";
import "./index.css";

const App = () => (
  <div className="">
    <MHeader />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
