import { config } from "process";
import React from "react";
import { Route } from "react-router-dom";

export default (routes, BaseComponent) => {
  const configRoutes = [];
  routes &&
    routes.map((route, index) => {
      configRoutes.push(
        <Route
          exact
          key={index}
          path={route.object_slug}
          viewName={route.title}
          component={() => {
            <BaseComponent component="Posts" />;
          }}
        />
      );
    });

  return configRoutes;
};
