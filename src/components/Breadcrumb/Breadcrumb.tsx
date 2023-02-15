import { Breadcrumb } from "antd/es";
import { useLocation, Link, matchRoutes } from "react-router-dom";
import { mdiHomeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import getDashboardRoutes from "../../routes/dashboard";
import { useAppSelector } from "../../store/hooks";
function Dashbreadcrumb() {
  const isFirstLogin = true;
  const location = useLocation();
  console.log("locatuionObj", location);
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  return (
    <Breadcrumb style={{ fontWeight: "bold" }} separator={`>`}>

    </Breadcrumb>
  );
}
export default Dashbreadcrumb;
