import {
  mdiMapOutline,
  mdiViewGridOutline,
  mdiSync,
  mdiFileKeyOutline,
} from "@mdi/js";

const dashboardRoutes = [
  {
    key: "/dashboard/home",
    path: "/dashboard/home",
    label: "Dashboard",
    icon: mdiViewGridOutline,
    sidebar: true,
  },
  {
    key: "/dashboard/accounts",
    path: "/dashboard/accounts",
    label: "Integration Acoounts",
    icon: mdiMapOutline,
    sidebar: true,
  },
  // {
  //   key: "/dashboard/logs",
  //   path: "/dashboard/logs",
  //   label: "Logs",
  //   icon: mdiMapOutline,
  //   sidebar: true,
  // },
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
    key: "/dashboard/organizations",
    path: "/dashboard/organizations",
    label: "Organizations",
    icon: mdiMapOutline,
    sidebar: true,
  },
];
const onlyFirstTimeRoutes = [
  {
    key: "/dashboard/getting-started",
    path: "/dashboard/getting-started",
    label: "Getting Started",
    icon: mdiMapOutline,
    sidebar: true,
  },
];

const onlyLoginRoutes = [
  {
    key: "/dashboard/api-keys",
    path: "/dashboard/api-keys",
    label: "API Keys",
    icon: mdiFileKeyOutline,
    sidebar: true,
  },
];

const getDashboardRoutes = (isFirstLogin: boolean = false) => {
  return [...dashboardRoutes].concat(
    isFirstLogin ? onlyFirstTimeRoutes : onlyLoginRoutes
  );
};

export default getDashboardRoutes;
