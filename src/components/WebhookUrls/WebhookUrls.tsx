import React, { useState } from "react";
import { Row, Col, Layout, Input, Tooltip, Button } from "antd";
import { EditOutlined } from '@ant-design/icons';
import "./../WebhookUrls/WebhookUrls.scss";

const WebhookUrls: React.FC = () => {
    const [prodWebhookEditable, setProdWebhookEditable] = useState<boolean>(false)
    const [sandWebhookEditable, setSandWebhookEditable] = useState<boolean>(false)
    return (
        <div className="webhookContainer">
            <Row className="row">Enter Webhook URL </Row>
            <Row className="row">
                <Input.Group compact>
                    <Input
                        readOnly={prodWebhookEditable}
                        addonBefore="https://"
                        style={{ width: 'calc(100% - 200px)' }}
                        placeholder="Paste / Type in your webhook URL here"
                    />
                    <Tooltip title="Edit Webhook Url">
                        <Button icon={<EditOutlined onClick={() => setProdWebhookEditable(true)}/>}/>
                    </Tooltip>
                </Input.Group>
            </Row>
            <Row className="row">Enter Sandbox URL </Row>
            <Row className="row">
                <Input.Group compact>
                    <Input
                        readOnly={sandWebhookEditable}
                        addonBefore="https://"
                        style={{ width: 'calc(100% - 200px)' }}
                        placeholder="Paste / Type in your sandbox URL here"
                    />
                    <Tooltip title="Edit">
                        <Button icon={<EditOutlined onClick={() => setSandWebhookEditable(true)}/>}/>
                    </Tooltip>
                </Input.Group>
            </Row>
        </div>
      );
}

export default WebhookUrls;