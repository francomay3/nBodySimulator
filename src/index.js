import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const F = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <h1>
      Hello World from <a href="https://www.polynique.com">Polynique</a>
    </h1>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
