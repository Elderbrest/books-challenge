import Listing from "./components/Listing";
import Details from "./components/Details";
import PageNotFound from "./components/PageNotFound";

const routes = [
  { path: '/', component: Listing },
  { path: '/post/:slug', component: Details },
  { path: "*", component: PageNotFound }
];

export default routes;

