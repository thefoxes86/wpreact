import { config } from "process";
import React from "react";
import { Route } from "react-router-dom";
import BaseComponent from "../../pages/Base/Base";

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
        >
          <BaseComponent viewName={route.title} component="Posts" />
        </Route>
      );
    });
  console.log(configRoutes);
  return configRoutes;
};
