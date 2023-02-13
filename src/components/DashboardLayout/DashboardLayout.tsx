import React, { useState } from "react";
import { Layout, Space, Menu, Row, Col, Avatar } from "antd";
import Icon from "@mdi/react";
import { Routes, Route, Navigate } from "react-router-dom";
import GettingStarted from "../../pages/GettingStarted";
import type { MenuProps } from "antd";
import {
  UserOutlined,
  FundProjectionScreenOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import dashboardRoutes from "../../routes/dashboard";
import { DashboardHome } from "../../pages";
import DashBreadCrumb from "../Breadcrumb";
import Organizations from "../../pages/Organizations";
type MenuItem = Required<MenuProps>["items"][number];

const { Header, Footer, Sider, Content } = Layout;

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

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ background: "white" }}>
        {" "}
        <Menu
          selectedKeys={[location.pathname]}
          overflowedIndicator={<EllipsisOutlined />}
        >
          {dashboardRoutes.map((route: any) => {
            console.log(route.icon);
            return (
              <Menu.Item key={route.key} className="px-1">
                <Link to={route.path} className="text-decoration-none">
                  <Row>
                    <Col md="3" sm="3" className="me-2">
                      <Icon
                        className="align-text-top"
                        size={"18px"}
                        path={route.icon}
                      />
                    </Col>
                    <span
                      data-testid={
                        route.label.toLowerCase().split(" ").join("-") + "-nav"
                      }
                    >
                      {route.label}
                    </span>
                  </Row>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="pe-4"
          style={{
            borderBottom: "1px solid lightgrey",
            background: "transparent",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          <div className="avatar-details ms-2">
            <h6 className="avatar-details-name mb-1">Firstname LastName</h6>
            <p className="avatar-details-description mb-0 lh-1">Admin</p>
          </div>
        </Header>
        <DashBreadCrumb />
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/issues" element={<div>Issues</div>} />
          <Route path="/syncs" element={<div>Syncs</div>} />
          <Route path="/syncs/:jobId" element={<div>JobId</div>} />
          <Route path="/syncs/:jobId/:runId" element={<div>RunID</div>} />
          <Route path="/logs" element={<div>Logs</div>} />
          <Route path="/accounts" element={<div>Accounts</div>} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
