import React from "react";
import apiRequest from "../../lib/apiRequest";

export default function Posts(props) {
  const rest = apiRequest("https://xdesigners.it/wp-json/wp/v2/posts");
  rest
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return <h1>{props.viewName}</h1>;
}
