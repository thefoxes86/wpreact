import React from "react";
import { Route } from "react-router-dom";

export default (routes, BaseComponent) => {
  const configRoutes = [];

  routes.map((route, index) => {
    configRoutes.push(
      <Route
        exact
        key={index}
        path={route.object_slug}
        viewName={route.title}
        component={() => {
          <BaseComponent
            viewName={route.title}
            component="Pages"
            routes={routes}
          />;
        }}
      />
    );
  });

  return configRoutes;
};
