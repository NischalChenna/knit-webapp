import { TableOutlined } from "@ant-design/icons";
import { mdiTableLargeRemove } from "@mdi/js";
import Icon from "@mdi/react";
import { Empty, Skeleton, Table } from "antd";

interface DataTableProps {
  data: readonly any[] | undefined;
  columns: any;
  pagination?: boolean;
  dataLoaded: boolean;
}

const DataTable = ({
  data = [],
  columns = [],
  pagination = false,
  dataLoaded = false,
}: DataTableProps): JSX.Element => {
  const paginationProps = {
    pagination: {
      pageSize: 5,
    },
  };
  return !dataLoaded ? (
    // <TableSkeleton rows={5} />
    <Skeleton.Node
      active={true}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <TableOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
    </Skeleton.Node>
  ) : data.length > -1 ? (
    <Table
      columns={columns}
      dataSource={data}
      locale={{
        emptyText: (
          <div style={{ fontSize: "20px" }}>
            <Icon path={mdiTableLargeRemove} size={3} />
            <p className="p-2">No Data</p>
          </div>
        ),
      }}
      {...(pagination ? { ...paginationProps } : {})}
    />
  ) : (
    <Empty />
  );
};

export default DataTable;
