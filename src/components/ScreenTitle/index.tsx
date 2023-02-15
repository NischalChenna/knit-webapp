import { matchRoutes, Route, useLocation } from "react-router-dom";
import {getDashboardRoutes} from "../../routes/dashboard";
import { useAppSelector } from "../../store/hooks";
import "../ScreenTitle/ScreenTitle.scss";

interface ScreenTitleProps {
  title?: string;
}

const ScreenTitle = (props: ScreenTitleProps): JSX.Element => {
  const location = useLocation();
  const { isFirstLogin } = useAppSelector((state) => state.user);

  const pathObjArray = getDashboardRoutes(isFirstLogin).map((path) => {
    return { path: path.path };
  });
  const matchedRoute = matchRoutes(pathObjArray, location.pathname);
  if (matchedRoute && matchedRoute.length && !props.title) {
    const route = getDashboardRoutes(isFirstLogin).find(
      (routeObj) => routeObj.path == matchedRoute[0].route.path
    );
    return (
      <h4 className="screenTitle">
        {route?.label}
        {route?.labelParams
          ? " : " + matchedRoute[0]["params"][route?.labelParams as string]
          : null}
      </h4>
    );
  }
  return <h4 className="screenTitle">{props.title}</h4>;
};

export default ScreenTitle;
