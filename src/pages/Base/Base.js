import React from "react";
import * as Pages from "../Base/Pages";

export default function BaseComponent(props) {
  const PageComponent = Pages[props.component];
  return (
    <React.Fragment>
      <PageComponent title={props.title} {...props} />
    </React.Fragment>
  );
}
