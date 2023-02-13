import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Space } from "antd";
import { DataType } from "./interfaces/DataType";

export const formatHeader = (title: string) => {
  return <div className="title">{title}</div>;
};

export const renderDeleteButton = (_: any, record: DataType) => {
  return (
    <Space size="middle" onClick={() => console.log("record ", record)}>
      <div className="deleteColumn">
        <Icon path={mdiTrashCanOutline} size={"3ex"} className="deleteIcon" />
        Delete
      </div>
    </Space>
  );
};
