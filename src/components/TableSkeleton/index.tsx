import { Col, Row, Skeleton } from "antd";
import React from "react";
import "./TableSkeleton.scss";
interface Skeleton {
  rows: number;
}

const TableSkeleton = ({ rows = 5 }: Skeleton): JSX.Element => {
  return (
    <React.Fragment>
      {" "}
      {[...Array(rows).keys()].map((r, i) => (
        <Row key={i} className="table-skeleton">
          <Col sm={6} md={6} className="px-1">
            <Skeleton.Button active={i % 2 ==0} size="large" />
          </Col>{" "}
          <Col sm={6} md={6} className="px-1">
            <Skeleton.Button active={i % 2 ==0} size="large" />
          </Col>{" "}
          <Col sm={6} md={6} className="px-1">
            <Skeleton.Button active={i % 2 ==0} size="large" />
          </Col>{" "}
          <Col sm={6} md={6} className="px-1">
            <Skeleton.Button active={i % 2 ==0} size="large" />
          </Col>{" "}
          {/* <Col sm={4} md={4} className="px-1">
            <Skeleton.Button active size="large" />
          </Col>{" "}
          <Col sm={4} md={4} className="px-1">
            <Skeleton.Button active size="large" />
          </Col>{" "} */}
        </Row>
      ))}
    </React.Fragment>
  );
};

export default TableSkeleton;
