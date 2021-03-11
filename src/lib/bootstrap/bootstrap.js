import BaseComponent from "../../pages/Base/Base";
import React, { StrictMode } from "react";
import getRoutes from "./getRoutes";

export default function bootstrap(url, id) {
  const endpoint = url + "/wp-json/wp-api-menus/v2/menus/" + id;

  return new Promise((resolve, reject) => {
    const request = fetch(endpoint);

    request
      .then((res) => {
        res.json().then((response) => {
          const routes = getRoutes(response.items);

          resolve(routes);
        });
      })
      .catch((err) => reject(err));
  });
}
