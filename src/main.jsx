import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
