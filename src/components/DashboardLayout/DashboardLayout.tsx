import React from "react";
import { Layout, Space } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const DashboardLayout: React.FC = () => (
  <Layout>
    <Sider style={siderStyle}>Sider</Sider>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Routes>
        <Route path="/logs" element={<div>Logs</div>} />
        <Route path="/issues" element={<div>Issues</div>} />
        <Route path="/accounts" element={<div>Accounts</div>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Layout>
  </Layout>
);

export default DashboardLayout;
