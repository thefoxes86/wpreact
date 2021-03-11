import React from "react";
import Menu from "./Menu";

export default function Header(props) {
  return (
    <React.Fragment>
      <Menu routes={props.routes} />
      <h1>{props.title}</h1>
      <div>header</div>
    </React.Fragment>
  );
}
