import React, { useEffect, useState } from "react";
import { Row, Col, Layout, notification, Spin } from "antd";
import APIKeys from "../../components/APIKeys";
import WebhookUrls from "../../components/WebhookUrls";
import getAxiosInstance from "../../services/Api";
import "../GettingStarted/GettingStarted.scss";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import Loading from "../../components/Loading";
import ScreenTitle from "../../components/ScreenTitle";

const GettingStarted: React.FC = () => {
  const [prodApiKey, setProdApiKey] = useState<string>("");
  const [sandboxApiKey, setSandboxApiKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    getAxiosInstance()
      .get("app.getApiKeys", {})
      .then((res) => {
        if (res.data.success) {
          setProdApiKey(res.data.msg.prodApiKey);
          setSandboxApiKey(res.data.msg.sandboxApiKey);
        }
      })
      .catch((err) => {
        notification.error({
          placement: "bottomRight",
          message:
            err?.response?.data?.error?.msg ||
            " Something went wrong, please try again",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="gettingStarted">
          <ScreenTitle />
          <Row className="apiKeysCon">
            <Col span={20}>
              <APIKeys sandboxApiKey={sandboxApiKey} prodApiKey={prodApiKey} />
            </Col>
          </Row>
          <Row className="webhookCon">
            <Col span={20}>
              <WebhookUrls />
            </Col>
          </Row>
          <Row className="desc">
            To get started with KNIT, follow the simple steps mentioned in our
            KNIT documentation
          </Row>
          <Row className="descLink">
            <div className="docDesc">Link to KNIT documentation</div>
            <a href="https://developers.getknit.dev/" target={"_blank"}>
              <Icon path={mdiOpenInNew} size={"3ex"} className="link"></Icon>
            </a>
          </Row>
        </div>
      )}
    </>
  );
};

export default GettingStarted;
