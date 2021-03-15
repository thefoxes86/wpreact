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

      let slug =
        route.object_slug === "home" || route.object_slug === "homepage"
          ? "/"
          : route.object_slug;

      console.log(componentElement);

      let objToPush = {
        title: route.title,
        slug: slug,
        component: componentElement,
        route,
      };
      configRoutes.push(objToPush);
    });

  return configRoutes;
};
