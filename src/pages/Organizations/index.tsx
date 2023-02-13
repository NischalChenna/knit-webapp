import { mdiChevronLeft, mdiChevronRight, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Col, Row, Select, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import SelectCategory from "../../components/SelectCategory";
import SelectTimePeriod from "../../components/SelectTimePeriod";
import "../Organizations/Organizations.scss";
interface DataType {
  key?: string;
  name?: string;
  appId: string;
  category: string;
  doneBy: string;
  createdAt: string;
  integrationState: string;
  organization: string;
}
export default function Organizations() {
  const formatHeader = (title: string) => {
    return <div className="title">{title}</div>;
  };
  const columns: ColumnsType<DataType> = [
    {
      title: formatHeader("Organization"),
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "App",
      dataIndex: "appId",
      key: "appId",
    },
    {
      title: "Integration Status",
      dataIndex: "integrationState",
      key: "integrationState",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Done By",
      dataIndex: "doneBy",
      key: "doneBy",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" onClick={() => console.log("record ", record)}>
          <div className="deleteColumn">
            <Icon
              path={mdiTrashCanOutline}
              size={"3ex"}
              className="deleteIcon"
            />
            Delete
          </div>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
    {
      appId: "msteams",
      category: "COMMS",
      integrationState: "open",
      createdAt: "null",
      doneBy: "nischal@rapido.com",
      organization: "Rapido",
    },
  ];
  return (
    <div>
      <h4>Organizations</h4>
      <div className="organizations">
        <Row align={"middle"}>
          <Col span={18}>
            <div>
              Total Organizations Being Served
              <div>{12}</div>
            </div>
          </Col>
          <Col className="filters">
            <SelectTimePeriod className="timeperiod" />
            <SelectCategory />
          </Col>
        </Row>
        <Row></Row>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 5,
            // itemRender(page, type, element) {
            //   if (type == "prev") {
            //     return <Icon path={mdiChevronLeft} size={1} />;
            //   } else if (type == "next") {
            //     return <Icon path={mdiChevronRight} size={1} />;
            //   }
            //   return type;
            // },
          }}
        />
      </div>
    </div>
  );
}
