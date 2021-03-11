import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import "./index.css";
import bootstrap from "./lib/bootstrap/bootstrap";
import history from "./lib/history";
import reportWebVitals from "./reportWebVitals";
import BaseComponent from "./pages/Base/Base";

const mainUrl = "https://xdesigners.it";
export default function App({ routes }) {
  return (
    <React.StrictMode>
      <Router history={history}>
        <div className="App">
          <Switch>
            {routes &&
              routes.map((props, index) => (
                <Route
                  exact
                  key={index}
                  path={"/" + props.slug}
                  viewName={props.title}
                >
                  <BaseComponent
                    {...props}
                    component={props.component}
                    routes={routes}
                    mainUrl={mainUrl}
                  />
                </Route>
              ))}
          </Switch>
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
