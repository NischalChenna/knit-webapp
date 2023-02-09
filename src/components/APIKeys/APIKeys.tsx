import React from "react";
import { Row, Col, Layout, Input, Tooltip, Button } from "antd";
import { CopyOutlined } from '@ant-design/icons';
import "./../APIKeys/APIKeys.scss";

const APIKeys: React.FC = () => {
    return (
        <div className="apiKeyContainer">
            {/* <Row>Get your production account’s API Key</Row>
            <Row>
                <Input.Group compact>
                <Input
                        readOnly
                        style={{ width: 'calc(100% - 200px)' }}
                        defaultValue="XXX - XXX - XXX - XXX"
                    />
                    <Tooltip title="copy">
                        <Button icon={<CopyOutlined rotate={180} />}/>
                    </Tooltip>
                </Input.Group>
            </Row> */}
            <Row>Get your production account’s API Key</Row>
            <Row>
                <Input.Group compact>
                <Input
                        readOnly
                        style={{ width: 'calc(100% - 200px)' }}
                        defaultValue="XXX - XXX - XXX - XXX"
                    />
                    <Tooltip title="copy">
                        <Button icon={<CopyOutlined rotate={180} />}/>
                    </Tooltip>
                </Input.Group>
            </Row>
            <Row>Get your sandbox account’s API key</Row>
            <Row>
                <Input.Group compact>
                <Input
                        readOnly
                        style={{ width: 'calc(100% - 200px)' }}
                        defaultValue="XXX - XXX - XXX - XXX"
                    />
                    <Tooltip title="copy">
                        <Button icon={<CopyOutlined rotate={180} />}/>
                    </Tooltip>
                </Input.Group>
            </Row>
        </div>
      );
}

export default APIKeys;