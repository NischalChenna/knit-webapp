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
  {
    key: "/dashboard/syncs",
    path: "/dashboard/syncs",
    label: "Syncs",
    icon: mdiSync,
  },
  {
    key: "/dashboard/syncs/:jobId",
    path: "/dashboard/syncs/:jobId",
    label: "Job ID",
    labelParams: "jobId",
    icon: mdiSync,
  },
  {
    key: "/dashboard/syncs/:jobId/:runId",
    path: "/dashboard/syncs/:jobId/:runId",
    label: "Run ID",
    labelParams: "runId",
    icon: mdiSync,
  },
  {
    key: "/dashboard/home",
    path: "/dashboard/home",
    label: "Dashboard",
    icon: mdiViewGridOutline,
  },
  {
    key: "/dashboard/organisations",
    path: "/dashboard/organisations",
    label: "Organisations",
    icon: mdiHexagonMultipleOutline,
  },
];

export default dashboardRoutes;
