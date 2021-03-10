import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Switch, Router } from "react-router-dom";
import history from "./lib/history";
import bootstrap from "./lib/bootstrap/bootstrap";
import Menu from "./components/Menu";
import BaseComponent from "./pages/Base/Base";
import Posts from "./pages/Posts";
export default function App({ routes }) {
  return (
    <React.StrictMode>
      <Router history={history}>
        <div className="App">
          <Menu routes={routes} />
          <Switch>{routes}</Switch>
        </div>
      </Router>
    </React.StrictMode>
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
