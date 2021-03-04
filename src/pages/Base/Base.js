import React from "react";
import Menu from "../../components/Menu";
import * as Pages from "../Base/Pages";

export default (Base) => {
  const PageComponent = Pages[Base.component];

  return (
    <React.Fragment>
      <Menu routes={Base.routes} />
      <PageComponent />
    </React.Fragment>
  );
};
