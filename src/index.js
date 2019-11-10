import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import AppComp from "./AppComp";

function App() {
  return (
    <div className="App">
      <AppComp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
