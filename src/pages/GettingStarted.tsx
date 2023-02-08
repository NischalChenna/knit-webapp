import React from "react";
import { Row, Col, Layout } from "antd";
import APIKeys from "../components/APIKeys/APIKeys";
import WebhookUrls from "../components/WebhookUrls/WebhookUrls";

const GettingStarted: React.FC = () => {
    return (
        <>
            <h3>Getting Started</h3>
            <APIKeys/>
            <Row justify="center">
                <Col span={24} >
                    <WebhookUrls/>
                </Col>
            </Row>
        </>
      );
}

export default GettingStarted;