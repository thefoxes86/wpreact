import LoadComponent from "../../lib/LoadComponent";

const Page = LoadComponent({
  loader: () => import("../Page"),
});

const SinglePost = LoadComponent({
  loader: () => import("../Post"),
});

const Archive = LoadComponent({
  loader: () => import("../Archive"),
});

const Category = LoadComponent({
  loader: () => import("../Category"),
});

const Home = LoadComponent({
  loader: () => import("../Home"),
});

export { Page, SinglePost, Archive, Home, Category };
