import { Breadcrumb } from "antd";
import { useLocation, Link, matchRoutes } from "react-router-dom";
import { mdiHomeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import getDashboardRoutes from "../../routes/dashboard";
import { useAppSelector } from "../../store/hooks";
const DashBreadCrumb = () => {
  const { isFirstLogin } = useAppSelector((state) => state.user);
  const location = useLocation();
  console.log("locatuionObj", location);
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  return (
    <Breadcrumb style={{ fontWeight: "bold" }} separator={`>`}>
      {/* <Breadcrumb.Item key="home" className="py-2"> */}
      <Link className="text-decoration-none" to="/dashboard/home" key={"home"}>
        <Icon path={mdiHomeOutline} size={1} />
      </Link>
      {/* </Breadcrumb.Item> */}
      {pathSnippets.map((_, index) => {
        if (index > 0) {
          const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
          const pathObjArray = getDashboardRoutes(isFirstLogin).map((path) => {
            return { path: path.path };
          });
          const matchedRoute = matchRoutes(pathObjArray, url);
          if (matchedRoute && matchedRoute.length) {
            const crumbRouteObj = getDashboardRoutes(isFirstLogin).find(
              (routeObj) => routeObj.path == matchedRoute[0].route.path
            );
            if (_ != "home")
              return (
                // <Breadcrumb.Item key={url} className="py-2">
                <Link className="text-decoration-none" to={url} key={url}>
                  {crumbRouteObj?.label}
                  {crumbRouteObj?.labelParams
                    ? " : " +
                      matchedRoute[0]["params"][
                        crumbRouteObj?.labelParams as string
                      ]
                    : null}
                </Link>
                // </Breadcrumb.Item>
              );
          }
        }
      })}
    </Breadcrumb>
  );
};
export default DashBreadCrumb;
