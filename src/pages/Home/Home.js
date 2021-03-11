import React from "react";
import apiRequest from "../../lib/apiRequest";

export default function Home(props) {
  console.log("ciao");
  const rest = apiRequest("https://xdesigners.it/wp-json/wp/v2/pages");
  rest
    .then((response) => {
      console.log(response);
      return <div>Ciao</div>;
    })
    .catch((error) => {
      console.log(error);
      return <div>Errore</div>;
    });
  return <h1>Ciao</h1>;
}
