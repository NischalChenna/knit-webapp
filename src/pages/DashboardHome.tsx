import { Col, Row, Skeleton } from "antd";
import PieChartOutlined from "@ant-design/icons";
import { DashboardInfoCard, DounutChartCardDashboard } from "../components";

const org = {
    title: "Organization served",
    count: 43,
    route: "/dashboard/home",
    loading: false
}


const integration = {  
    title: "Integrations Accounts",
    count: 64,
    route: "/dashboard/accounts",
    loading: true
}

const issues = {
    title: "Issues",
    count: 12,
    route: "/dashboard/issues",
    loading: false
}

const logs = {
    title: "apiCalls",
    count: 64,
    route: "/dashboard/logs",
    loading: true
}



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
            <DashboardInfoCard info={org} />
          </Col>

          <Col span={16}>
            <DounutChartCardDashboard info={integration}/>
          </Col>
        </Row>

        <Row gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}>
          <Col span={8}>
          <DashboardInfoCard info={issues}/>
          </Col>
          <Col span={16}>
          <DounutChartCardDashboard info={logs} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardHome;
