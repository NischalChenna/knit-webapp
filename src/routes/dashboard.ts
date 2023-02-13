import {
  mdiMapOutline,
  mdiViewGridOutline,
  mdiHexagonMultipleOutline,
  mdiSync,
} from "@mdi/js";
const getSvg = (pathStr: string) => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathStr}" fill="currentColor"/>
  </svg>`;
};

const dashboardRoutes = [
  {
    key: "/dashboard/getting-started",
    path: "/dashboard/getting-started",
    label: "Getting Started",
    icon: mdiMapOutline,
    sidebar: true,
  },
  {
    key: "/dashboard/accounts",
    path: "/dashboard/accounts",
    label: "Integration Acoounts",
    icon: mdiMapOutline,
    sidebar: true,
  },
  {
    key: "/dashboard/logs",
    path: "/dashboard/logs",
    label: "Logs",
    icon: mdiMapOutline,
    sidebar: true,
  },
  {
    key: "/dashboard/syncs",
    path: "/dashboard/syncs",
    label: "Syncs",
    icon: mdiSync,
    sidebar: true,
  },
  {
    key: "/dashboard/syncs/:jobId",
    path: "/dashboard/syncs/:jobId",
    label: "Job ID",
    labelParams: "jobId",
    icon: mdiSync,
    sidebar: false,
  },
  {
    key: "/dashboard/syncs/:jobId/:runId",
    path: "/dashboard/syncs/:jobId/:runId",
    label: "Run ID",
    labelParams: "runId",
    icon: mdiSync,
    sidebar: false,
  },
  {
    key: "/dashboard/home",
    path: "/dashboard/home",
    label: "Dashboard",
    icon: mdiViewGridOutline,
    sidebar: true,
  },
  {
    key: "/dashboard/organizations",
    path: "/dashboard/organizations",
    label: "Organizations",
    icon: mdiMapOutline,
    sidebar: true,
  },
];

export default dashboardRoutes;
