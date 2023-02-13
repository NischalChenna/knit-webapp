import React, { useEffect, useState } from "react";
import { Row, Col, Layout, Input, Tooltip, Button, notification } from "antd";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./../WebhookUrls/WebhookUrls.scss";
import getAxiosInstance from "../../services/Api";

const WebhookUrls: React.FC = () => {
  const [prodWebhookEditable, setProdWebhookEditable] =
    useState<boolean>(false);
  const [sandWebhookEditable, setSandWebhookEditable] =
    useState<boolean>(false);
  const [prodWebhook, setProdWebhook] = useState<string>("");
  const [sandWebhook, setSandWebhook] = useState<string>("");
  const [prodWebhookLoading, setProdWebhookLoading] = useState<boolean>(false);
  const [sandWebhookLoading, setSandWebhookLoading] = useState<boolean>(false);
  const inputProps = {
    icon: <EditOutlined style={{ color: "#ff6c37" }} />,
  };
  const suffuxProps = (sandbox: boolean) => {
    return {
      suffix: (
        <CloseCircleOutlined
          onClick={() => {
            if (sandbox) {
              setSandWebhook(sandWebhook);
              setSandWebhookEditable(!sandWebhookEditable);
            } else {
              setProdWebhook(prodWebhook);
              setProdWebhookEditable(!prodWebhookEditable);
            }
          }}
        />
      ),
    };
  };
  const getInitialWebhookUrls = () => {
    getAxiosInstance()
      .get("app.getWebhookUrls", {})
      .then((res) => {
        if (res.data.success) {
          setProdWebhook(res.data.msg.prodWebhookUrl);
          setSandWebhook(res.data.msg.sandboxWebhookUrl);
        }
      })
      .catch((err) => {
        notification.error({
          placement: "bottomRight",
          message:
            err?.response?.data?.error?.msg ||
            " Something went wrong, please try again",
        });
      });
  };
  useEffect(() => {
    getInitialWebhookUrls();
  }, []);

  const saveWebhookUrl = (sandbox: boolean) => {
    sandbox ? setSandWebhookLoading(true) : setProdWebhookLoading(true);
    getAxiosInstance()
      .post("app.postWebhookUrls", {
        ...(sandbox
          ? { sandboxWebhookUrl: sandWebhook }
          : { prodWebhookUrl: prodWebhook }),
      })
      .then((res) => {
        if (res.data.success) {
          sandbox
            ? setSandWebhookEditable(!sandWebhookEditable)
            : setProdWebhookEditable(!prodWebhookEditable);
          getInitialWebhookUrls();
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
        sandbox ? setSandWebhookLoading(false) : setProdWebhookLoading(false);
      });
  };

  return (
    <div className="webhookContainer">
      <Row className="label">Enter Webhook URL </Row>
      <Row className="row">
        <Input.Group compact>
          <Input
            readOnly={!prodWebhookEditable}
            addonBefore={
              <span
                className="inputPrefix"
                style={{ backgroundColor: "#FFD5A41A !important" }}
              >
                https://
              </span>
            }
            style={{ width: "calc(100% - 200px)", height: "32px" }}
            placeholder="Paste / Type in your webhook URL here"
            value={prodWebhook}
            onChange={(e) => {
              setProdWebhook(e.target.value);
            }}
            {...(prodWebhookEditable ? { ...suffuxProps(false) } : {})}
          />
          <Tooltip title={!prodWebhookEditable ? "Edit Webhook Url" : ""}>
            <Button
              {...(!prodWebhookEditable ? { ...inputProps } : {})}
              {...(prodWebhookEditable ? { type: "primary" } : {})}
              onClick={() =>
                !prodWebhookEditable
                  ? setProdWebhookEditable(!prodWebhookEditable)
                  : saveWebhookUrl(false)
              }
              loading={prodWebhookLoading}
            >
              {prodWebhookEditable ? "Save" : ""}
            </Button>
          </Tooltip>
        </Input.Group>
      </Row>
      <Row></Row>
      <Row className="label">Enter Sandbox URL </Row>
      <Row className="row">
        <Input.Group compact>
          <Input
            readOnly={!sandWebhookEditable}
            addonBefore="https://"
            style={{ width: "calc(100% - 200px)", height: "33px" }}
            placeholder="Paste / Type in your sandbox URL here"
            {...(sandWebhookEditable ? { ...suffuxProps(true) } : {})}
            value={sandWebhook}
            onChange={(e) => {
              setSandWebhook(e.target.value);
            }}
          />
          <Tooltip title="Edit Sandbox URL">
            <Button
              {...(!sandWebhookEditable ? { ...inputProps } : {})}
              {...(sandWebhookEditable ? { type: "primary" } : {})}
              onClick={() =>
                !sandWebhookEditable
                  ? setSandWebhookEditable(!sandWebhookEditable)
                  : saveWebhookUrl(true)
              }
              loading={sandWebhookLoading}
            >
              {sandWebhookEditable ? "Save" : ""}
            </Button>
          </Tooltip>
        </Input.Group>
      </Row>
    </div>
  );
};

export default WebhookUrls;
