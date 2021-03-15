import LoadComponent from "../../lib/LoadComponent";

const Page = LoadComponent({
  loader: () => import("../Page"),
});

const Post = LoadComponent({
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

export { Page, Post, Archive, Home, Category };
