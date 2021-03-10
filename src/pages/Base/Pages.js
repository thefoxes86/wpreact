import LoadComponent from "../../lib/LoadComponent";

const Page = LoadComponent({
  loader: () => import("../Page"),
});

const Posts = LoadComponent({
  loader: () => import("../Posts"),
});

export { Page, Posts };
