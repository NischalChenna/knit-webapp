import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link, matchRoutes } from "react-router-dom";
import { mdiHomeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import dashboardRoutes from "../../routes/dashboard";
const DashBreadCrumb = () => {
  const location = useLocation();
  console.log("locatuionObj", location);
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    if (index > 0) {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const pathObjArray = dashboardRoutes.map((path) => {
        return { path: path.path };
      });
      const matchedRoute = matchRoutes(pathObjArray, url);

      if (matchedRoute && matchedRoute.length) {
        const crumbRouteObj = dashboardRoutes.find(
          (routeObj) => routeObj.path == matchedRoute[0].route.path
        );

        if (_ != "home")
          return (
            <Breadcrumb.Item key={url}>
              <Link className="text-decoration-none" to={url}>
                {crumbRouteObj?.label}
                {crumbRouteObj?.labelParams
                  ? " : " +
                    matchedRoute[0]["params"][
                      crumbRouteObj?.labelParams as string
                    ]
                  : null}
              </Link>
            </Breadcrumb.Item>
          );
      }
    }
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link className="text-decoration-none" to="/dashboard/home">
        <Icon path={mdiHomeOutline} size={1} />
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems as JSX.Element[]);

  return (
    <Breadcrumb
      style={{ fontWeight: "bold" }}
      separator={<span className="fw-bolder">{`>`}</span>}
    >
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default DashBreadCrumb;
