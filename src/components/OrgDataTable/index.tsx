import { mdiAlertBox, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Modal, Row, Space, Tooltip } from "antd";
import { ColumnsType } from "rc-table/lib/interface";
import { Fragment, useState } from "react";
import { OrgTableDataType } from "../../interfaces";
import { timeStampToDate } from "../../utils/filters";
import DataTable from "../DataTable";

interface OrgDataTableProps {
  data: any;
  loading: boolean;
}
const OrgDataTable = (props: OrgDataTableProps): JSX.Element => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const formatHeader = (title: string) => {
    return <div className="title">{title}</div>;
  };
  const formatCreatedAt = (createdAt: string) => {
    return <Fragment>{timeStampToDate(createdAt)}</Fragment>;
  };
  const formatNull = (value: string) => {
    console.log("value", value, value === null);
    if (value === "null" || value === null) {
      console.log("value 1", value);
      return <Fragment>--</Fragment>;
    }
    return <Fragment>{value}</Fragment>;
  };

  const renderDeleteButton = (_: any, record: OrgTableDataType) => {
    return (
      <Space size="middle" onClick={() => setDeleteDialogOpen(true)}>
        <div className="deleteColumn">
          <Icon path={mdiTrashCanOutline} size={"3ex"} className="deleteIcon" />
          Delete
        </div>
      </Space>
    );
  };
  //   const formatIntegrationStatus = (value: string) => {
  //     if (value==="Email sent") {
  //         return (
  //           <Fragment>

  //             <Tooltip placement="rightTop" title={text}>
  //               <Button>RT</Button>
  //             </Tooltip>
  //           </Fragment>
  //         );
  //     }
  //   }
  const tableColumns: ColumnsType<OrgTableDataType> = [
    {
      title: formatHeader("Organization"),
      dataIndex: "organization",
      key: "organization",
      render: formatNull,
    },
    {
      title: "App",
      dataIndex: "appId",
      key: "appId",
      render: formatNull,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: formatNull,
    },
    {
      title: "Integration Status",
      dataIndex: "integrationState",
      key: "integrationState",
      //   render: formatIntegrationStatus,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: formatCreatedAt,
    },
    {
      title: "Done By",
      dataIndex: "doneBy",
      key: "doneBy",
      render: formatNull,
    },
    {
      title: "Action",
      key: "action",
      render: renderDeleteButton,
    },
  ];
  const renderDeleteDialogTitle = (): React.ReactNode => {
    return (
      <Row justify={"center"} align={"middle"}>
        <Icon path={mdiAlertBox} size={1} className="deleteBtn" />
        <div>Attention!</div>
      </Row>
    );
  };
  return (
    <Fragment>
      <DataTable
        columns={tableColumns}
        data={props.data}
        dataLoaded={!props.loading}
        pagination={true}
      />
      <Modal
        title={renderDeleteDialogTitle()}
        centered
        open={deleteDialogOpen}
        onOk={() => setDeleteDialogOpen(false)}
        onCancel={() => setDeleteDialogOpen(false)}
      >
        <p>
          By deleting this integration, you will no longer have access to the
          unified APIs. Please be aware that this action is permanent and cannot
          be undone.
        </p>
        <p>
          If you proceed with deleting the integration, any services, data, or
          functionality relying on the unified APIs will no longer be
          accessible. Please confirm that you wish to proceed with the deletion
          of this integration.
        </p>
      </Modal>
    </Fragment>
  );
};

export default OrgDataTable;
