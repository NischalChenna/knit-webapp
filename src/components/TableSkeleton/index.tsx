import { Skeleton } from "antd";

interface Skeleton {
  rows: number;
}

const TableSkeleton = (props: Skeleton): JSX.Element => {
  return <Skeleton active paragraph={{ rows: props.rows }} />;
};

export default TableSkeleton;
