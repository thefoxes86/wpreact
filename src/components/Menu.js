import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ routes }) {
  return (
    <nav>
      <ul>
        {routes &&
          routes.map((props, index) => (
            <li key={index}>
              <Link to={props.slug}>{props.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
