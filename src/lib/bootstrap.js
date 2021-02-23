import React from "react";

export default function bootstrap(url, id) {
  const endpoint = url + "/wp-json/wp-api-menus/v2/menus/" + id;

  return new Promise((resolve, reject) => {
    const request = fetch(endpoint);

    request
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}
