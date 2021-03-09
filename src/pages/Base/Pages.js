import LoadComponent from "../../lib/LoadComponent";

const Pages = LoadComponent({
  loader: () => import("../Pages"),
});

const Posts = LoadComponent({
  loader: () => import("../Posts"),
});

export { Pages, Posts };
