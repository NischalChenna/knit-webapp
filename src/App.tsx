import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { Spin, ConfigProvider } from "antd";
const Authorize = React.lazy(() => import("./pages/Authorize"));
const Home = React.lazy(() => import("./pages/Home"));
const AdminAuth = React.lazy(() => import("./pages/AdminAuth"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const ErrorBoundary = import("./pages/Boundary.js");
const DashboardLayout = React.lazy(() => import("./pages/DashboardLayout"));

const Page404 = React.lazy(() => import("./pages/404"));
function App() {
  return (
   <ErrorBoundary>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff6c37",
            colorSuccess: "#059e05",
            colorPrimaryBg: "rgba(255, 213, 164, 0.15)",
            colorSuccessBg: "rgba(203, 222, 200, 0.3)",
            colorError: "#ff0000",
            colorErrorBg: "rgba(255, 234, 230, 0.4)",
            colorInfo: "#486aff",
            colorTextBase: "#202020",
            colorBgBase: "#ffffff",
            colorText: "rgba(32, 32, 32,1)",
            colorTextSecondary: "rgba(32, 32, 32, 0.7)",
            colorTextTertiary: "rgba(32, 32, 32, 0.5)",
            colorBorder: "#d9d9d9",
            colorBgContainer: "#FCFDFF",
          },
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
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
                  <Route path="/home" element={<Home />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/" element={<Navigate to="/signup" replace />} />
                  <Route path="/404" element={<Page404 />} />
                  <Route path="/oauth/authorize" element={<Authorize />} />
                  <Route path="/admin/authorize" element={<AdminAuth />} />
                  <Route path="/dashboard/*" element={<DashboardLayout />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </BrowserRouter>
            </React.Suspense>
          </PersistGate>
        </Provider>
      </ConfigProvider>
   </ErrorBoundary>
  );
}

export default App;
