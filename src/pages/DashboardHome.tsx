import { Col, Row, Skeleton } from "antd";
import PieChartOutlined from "@ant-design/icons";

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <h1>Dashboard</h1>
      <div className="content-box" style={{ margin: "3rem 10.18rem 0 2.5rem" }}>
        <Row
          gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}
          style={{ marginBottom: "3rem" }}
        >
          <Col span={8}>
            <Skeleton
              active={true}
              loading={true}
              paragraph={{
                rows: 2,
                width: [500, 100],
              }}
              title={{ width: 200 }}
            >
              <div style={{ backgroundColor: "red" }}>Card 1</div>
            </Skeleton>
          </Col>
          <Col span={16}>
            <Skeleton.Node active={true}>
              <PieChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
              {/* <div style={{ backgroundColor: "red"}}>Card 2</div> */}
            </Skeleton.Node>
          </Col>
        </Row>
        <Row gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}>
          <Col span={8}>
            <Skeleton
              active={true}
              loading={true}
              paragraph={{
                rows: 2,
                width: [500, 100],
              }}
              title={{ width: 200 }}
            >
              <div style={{ backgroundColor: "red" }}>Card 1</div>
            </Skeleton>
          </Col>
          <Col span={16}>
            <Skeleton.Node active={true}>
              <PieChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
              {/* <div style={{ backgroundColor: "red"}}>Card 2</div> */}
            </Skeleton.Node>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardHome;
