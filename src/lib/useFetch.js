import { useState, useEffect } from "react";

const useFetch = (query) => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setStatus("fetching");

      const response = await fetch(query);
      const data = await response.json();

      setData(data);
      setStatus("fetched");
    };
    fetchData();
  }, [query]);

  return { status, data };
};

export { useFetch };
