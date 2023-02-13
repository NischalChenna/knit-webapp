import React, { useEffect, useState } from "react";
import { Row, Col, Layout, Input, Tooltip, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./../APIKeys/APIKeys.scss";

interface ApiKeys {
  sandboxApiKey: string;
  prodApiKey: string;
}

function APIKeys(props: ApiKeys) {
  const [tooltip, setTooltip] = useState("Copy");
  useEffect(() => {
    if (tooltip == "Copied") {
      setTimeout(function () {
        setTooltip("Copy");
      }, 1000);
    }
  }, [tooltip]);

  return (
    <div className="apiKeyContainer">
      <Row>Get your production account’s API Key</Row>
      <Row>
        <Input.Group compact>
          <Input
            readOnly
            style={{ width: "calc(100% - 200px)", height: "32px" }}
            placeholder="XXX - XXX - XXX - XXX"
            value={props.prodApiKey}
          />
          <Tooltip title={tooltip}>
            <Button
              icon={<CopyOutlined rotate={180} style={{ color: "#ff6c37" }} />}
              onClick={() => {
                navigator.clipboard.writeText(props.prodApiKey);
                setTooltip("Copied");
              }}
            />
          </Tooltip>
        </Input.Group>
      </Row>
      <Row></Row>
      <Row>Get your sandbox account’s API key</Row>
      <Row>
        <Input.Group compact>
          <Input
            readOnly
            style={{ width: "calc(100% - 200px)", height: "32px" }}
            placeholder="XXX - XXX - XXX - XXX"
            value={props.sandboxApiKey}
          />
          <Tooltip title={tooltip}>
            <Button
              icon={<CopyOutlined rotate={180} style={{ color: "#ff6c37" }} />}
              onClick={() => {
                navigator.clipboard.writeText(props.sandboxApiKey);
                setTooltip("Copied");
              }}
            />
          </Tooltip>
        </Input.Group>
      </Row>
    </div>
  );
}

export default APIKeys;
