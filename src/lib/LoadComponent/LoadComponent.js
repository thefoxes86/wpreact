import Loadable from "react-loadable";
import Loading from "../../components/Loading";

export default function LoadComponent(opts) {
  return Loadable({
    loading: Loading,
    opts,
  });
}
