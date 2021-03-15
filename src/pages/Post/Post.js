import React from "react";
import { useFetch } from "../../lib/useFetch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function Post(props) {
  const url =
    props && props.mainUrl + "/wp-json/wp/v2/posts/" + props.route.object_id;
  const { status, data } = useFetch(url);

  return (
    status === "fetched" && (
      <React.Fragment>
        <div className="content">{data.content.rendered}</div>
        <Sidebar />
        <Footer />
      </React.Fragment>
    )
  );
}
