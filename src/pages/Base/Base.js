import React from "react";
import * as Pages from "../Base/Pages";

export default (Base) => {
  const PageComponent = Pages[Base.component];
  return (
    <React.Fragment>
      <PageComponent />
    </React.Fragment>
  );
};
