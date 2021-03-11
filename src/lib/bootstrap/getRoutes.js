import { config } from "process";
import React from "react";
import { Route } from "react-router-dom";
import Posts from "../../pages/Post";

export default (routes) => {
  const configRoutes = [];
  routes &&
    routes.map((route, index) => {
      let componentElement =
        route.object.charAt(0).toUpperCase() + route.object.slice(1);

      let objToPush = {
        title: route.title,
        slug: route.object_slug,
        component: componentElement,
        route,
      };
      configRoutes.push(objToPush);
    });

  return configRoutes;
};
