import Loadable from "react-loadable";
import Loading from "../../components/Loading";

export default function LoadComponent(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 1000,
        timeout: 10000,
      },
      opts
    )
  );
}
