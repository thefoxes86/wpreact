import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Switch, Router } from "react-router-dom";
import history from "./lib/history";
import bootstrap from "./lib/bootstrap/bootstrap";
import getRoutes from "./lib/bootstrap/getRoutes";

export default function App({ routes }) {
  return (
    <Router history={history}>
      <div>
        {console.log(routes)}
        <Switch>{routes}</Switch>
      </div>
    </Router>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const url = "https://xdesigners.it";
const id = "11";
bootstrap(url, id)
  .then((routes) => {
    ReactDOM.render(<App routes={routes} />, document.getElementById("root"));
  })
  .catch((err) => {
    console.log(err);
  });
