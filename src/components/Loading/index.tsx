import { Spin } from "antd";
import React from "react";

function Loading() {
  return (
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
  );
}

export default Loading;
