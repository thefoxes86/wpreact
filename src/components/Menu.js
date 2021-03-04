import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ routes }) {
  return (
    <nav>
      <ul>
        {routes &&
          routes.map(({ title, object_slug, url }) => (
            <li>
              <Link key={object_slug} to={object_slug}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
