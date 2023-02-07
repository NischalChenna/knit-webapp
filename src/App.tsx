import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spin } from "antd";
const Authorize = React.lazy(() => import("./pages/Authorize"));
const Home = React.lazy(() => import("./pages/Home"));
const AdminAuth = React.lazy(() => import("./pages/AdminAuth"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const DashboardLayout = React.lazy(
  () => import("./components/DashboardLayout/DashboardLayout")
);

const Page404 = React.lazy(() => import("./pages/404"));
function App() {
  return (
    <div className="">
      <React.Suspense
        fallback={
          <div
            id="loading-wrapper"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Spin tip="Loading" size="small" />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/oauth/authorize" element={<Authorize />} />
            <Route path="/admin/authorize" element={<AdminAuth />} />
            <Route path="/dashboard/*" element={<DashboardLayout />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
