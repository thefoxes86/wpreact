import React from "react";
import * as Pages from "../Base/Pages";

export default (Base) => {
  console.log("cicicic");
  const PageComponent = Pages[Base.component];
  return (
    <React.Fragment>
      <PageComponent title={Base.viewName} />
    </React.Fragment>
  );
};
