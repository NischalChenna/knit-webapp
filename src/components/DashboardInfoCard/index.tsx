import { Card } from "antd";
import "../DashboardInfoCard/DashboardInfoCard.scss";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

interface InfoProps {
  info: { title: string; count: number; route: string; loading: boolean };
}

const { Title } = Typography;

const DashboardInfoCard = (props: InfoProps) => {
  return (
    <Card
      className="dashboard-info-card"
      loading={props.info.loading ? true : false}
    >
      <div className="info-text-box">
        <Title level={4}>Total Count of</Title>
        <Title level={3} style={{ marginTop: 0 }} className="info-main-text">
          {props.info.title}
        </Title>
        <Title level={1}>{props.info.count}</Title>
      </div>
      <div className="link-box">
        <Link className="link-text" to={props.info.route}>
          Click to see details <Icon path={mdiArrowRight} size={0.5} />
        </Link>
      </div>
    </Card>
  );
};

export default DashboardInfoCard;
