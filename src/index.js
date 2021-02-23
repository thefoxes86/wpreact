import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import bootstrap from "./lib/bootstrap";

let menu;
ReactDOM.render(
  <React.StrictMode>{menu && <App routes={menu} />}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const url = "https://xdesigners.it";
const id = "11";
bootstrap(url, id)
  .then((res) => {
    res.json().then((res) => {
      menu = res.items;
    });
  })
  .catch((err) => {
    console.log(err);
  });
