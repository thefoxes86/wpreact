import { Route, Switch, Link, Router } from "react-router-dom";

function App({ routes }) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routes &&
              routes.map(({ title, object_slug, url }) => (
                <li>
                  <Link to={object_slug}>{title}</Link>
                </li>
              ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes &&
            routes.map(({ title, object_slug, url }) => (
              <Route extact path={object_slug}></Route>
            ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
