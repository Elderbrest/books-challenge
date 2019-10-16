import Listing from "./components/Listing";
import Details from "./components/Details";

const routes = [
  { path: '/', component: Listing },
  { path: '/post/:slug', component: Details },
];

export default routes;

