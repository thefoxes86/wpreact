import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ routes }) {
  return (
    <nav>
      <ul>
        {routes &&
          routes.map(({ props }) => (
            <li key={props.path}>
              <Link key={props.path} to={props.path}>
                {props.path}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
