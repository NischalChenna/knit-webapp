import { mdiMapOutline } from "@mdi/js";
const getSvg = (pathStr: string) => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathStr}" fill="currentColor"/>
  </svg>`;
};

const dashboardRoutes = [
  {
    key: "/dashboard/gettingStarted",
    path: "/dashboard/gettingStarted",
    label: "Getting Started",
    icon: mdiMapOutline,
  },
  {
    key: "/dashboard/accounts",
    path: "/dashboard/accounts",
    label: "Integration Acoounts",
    icon: mdiMapOutline,
  },
  {
    key: "/dashboard/logs",
    path: "/dashboard/logs",
    label: "Logs",
    icon: mdiMapOutline,
  },
  // {
  //   key: "/dashboard/integrations",
  //   path: "/dashboard/integrations",
  //   label: "Integrations",
  //   icon: InfoCircleOutlined,
  // },
  {
    key: "/dashboard/home",
    path: "/dashboard/home",
    label: "Dashboard",
    icon: mdiMapOutline,
  },
  {
    key: "/dashboard/organisations",
    path: "/dashboard/organisations",
    label: "Organisations",
    icon: mdiMapOutline,
  },
];

export default dashboardRoutes;
