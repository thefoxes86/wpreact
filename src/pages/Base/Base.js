import React from "react";
import Header from "../../components/Header";
import * as Pages from "../Base/Pages";

export default function BaseComponent(props) {
  const PageComponent = Pages[props.component];
  return (
    <React.Fragment>
      <Header routes={props.routes} {...props} />
      <PageComponent title={props.title} {...props} />
    </React.Fragment>
  );
}
