import LoadComponent from "../../lib/LoadComponent";

const Pages = LoadComponent({
  loader: () => import("../Pages"),
});

export { Pages };
