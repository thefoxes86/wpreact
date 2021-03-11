import React from "react";
import apiRequest from "../../lib/apiRequest";

export default function Post(props) {
  const rest = apiRequest("https://xdesigners.it/wp-json/wp/v2/posts");

  rest
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return <h1>{props.title}</h1>;
}
