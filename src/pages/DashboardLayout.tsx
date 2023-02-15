import React, { useEffect } from "react";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import Icon from "@mdi/react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import GettingStarted from "./GettingStarted";
import type { MenuProps } from "antd";
import { UserOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import getDashboardRoutes from "../routes/dashboard";
import { DashboardHome } from ".";
import Dashbreadcrumb from "../components/Breadcrumb/BreadCrumb";
import Organizations from "./Organizations";
import ScreenTitle from "../components/ScreenTitle";
import Syncs from "./Syncs";
import { useAppSelector } from "../store/hooks";
import { mdiLogout } from "@mdi/js";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/features/user";
import IntegrationAccounts from "./IntegrationAccounts";

const { Header, Sider } = Layout;

// const headerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   height: 64,
//   paddingInline: 50,
//   lineHeight: "64px",
//   backgroundColor: "#7dbcea",
// };

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

// const siderStyle: React.CSSProperties = {
//   textAlign: "center",
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#3ba0e9",
// };

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, isFirstLogin } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="d-flex">
          <Icon path={mdiLogout} size={1} />
          <span className="ms-2">Logout</span>
        </div>
      ),
      key: "1",
      onClick: (e: any) => {
        e?.preventDefault;
        logout();
      },

      // icon: <UserOutlined />,
    },
  ];

  useEffect(() => {
    if (!isLoggedIn) navigate("/signup");
  }, [isLoggedIn]);

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    // <Layout style={{ height: "100vh" }}>

    // <Layout>
    //   <Header
    //     className="pe-4"
    //     style={{
    //       borderBottom: "1px solid lightgrey",
    //       background: "white",
    //       position: "sticky",
    //       top: 0,
    //       zIndex: 1,
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "flex-end",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Dropdown menu={{ items }} placement="bottom">
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "flex-end",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Avatar
    //           style={{ backgroundColor: "#87d068" }}
    //           icon={<UserOutlined />}
    //         />
    //         <div className="avatar-details ms-2">
    //           <h6 className="avatar-details-name mb-1">Firstname LastName</h6>
    //           <p className="avatar-details-description mb-0 lh-1">Admin</p>
    //         </div>
    //       </div>
    //     </Dropdown>
    //   </Header>
    <div className="dashboard-content-wrapper p-5 pt-3 pb-1">
      Dashboar content
      {/* <Dashbreadcrumb /> */}
      {/* <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/issues" element={<div>Issues</div>} />
        <Route
          path="/syncs"
          element={
            <React.Fragment>
              <Syncs />
            </React.Fragment>
          }
        />
        <Route
          path="/syncs/:jobId"
          element={
            <div>
              <ScreenTitle />
            </div>
          }
        />
        <Route
          path="/syncs/:jobId/:runId"
          element={
            <div>
              <ScreenTitle />
            </div>
          }
        />
        <Route path="/logs" element={<div>Logs</div>} />
        <Route path="/accounts" element={<IntegrationAccounts />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes> */}
    </div>
    // </Layout>
    // </Layout>
  );
}
export default DashboardLayout;
