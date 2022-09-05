// Layouts
import { DefaultLayout } from "../layouts";
// Pages
import Auth from "../pages/Auth";
import Crew from "../pages/Crew";
import Destinations from "../pages/Destinations";
import Home from "../pages/Home";
import Technology from "../pages/Technology";
import Tour from "../pages/Tour";
export const paths = {
  home: "/",
  destinations: "/destinations",
  crew: "/crew",
  technology: "/technology",
  tour: "/tour",
  auth: "/auth",
};
const routes = [
  { path: paths.home, component: Home, layout: DefaultLayout },
  {
    path: paths.destinations,
    component: Destinations,
    layout: DefaultLayout,
  },
  {
    path: paths.crew,
    component: Crew,
    layout: DefaultLayout,
  },
  {
    path: paths.technology,
    component: Technology,
    layout: DefaultLayout,
  },
  {
    path: paths.tour,
    component: Tour,
    layout: DefaultLayout,
  },
  {
    path: paths.auth,
    component: Auth,
    layout: DefaultLayout,
  },
];

export default routes;
