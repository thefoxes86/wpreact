import React, { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function Page(props) {
  const rest = apiRequest(
    props.mainUrl + "/wp-json/wp/v2/pages/" + props.route.object_id
  );
  const [pageProps, setPageProps] = useState();
  const [loading, setLoading] = useState(true);
  rest
    .then((response) => {
      console.log(response);
      setPageProps(response);
      setLoading(false);
    })
    .catch((error) => console.log(error));

  return (
    !loading && (
      <React.Fragment>
        <Header routes={props.routes} {...props} />
        <div className="content">{pageProps.author}</div>
        <Sidebar />
        <Footer />
      </React.Fragment>
    )
  );
}
