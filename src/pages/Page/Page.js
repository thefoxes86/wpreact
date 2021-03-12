import React, { useEffect, useState } from "react";
import { useFetch } from "../../lib/useFetch";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function Page(props) {
  const url =
    props && props.mainUrl + "/wp-json/wp/v2/pages/" + props.route.object_id;
  const { status, data } = useFetch(url);

  return (
    status === "fetched" && (
      <React.Fragment>
        <Header routes={props.routes} {...props} />
        <div className="content">{data.content.rendered}</div>
        <Sidebar />
        <Footer />
      </React.Fragment>
    )
  );
}
