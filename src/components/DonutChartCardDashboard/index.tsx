import { Card } from "antd";
import Title from "antd/es/typography/Title";
import "../DonutChartCardDashboard/DonutChartCardDashboard.scss"
import HalfDonutChart from "../HalfDonutChart";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

interface InfoProps {
   info: { title: string; count: number; route: string; loading: boolean };
 }


const DounutChartCardDashboard = (props:InfoProps) => {

   const seriesValues: number[] = [100, 55, 41, 17, 19, 23, 45];
   const labelValues: string[] = [
     "HRMS",
     "Communication",
     "Accounting",
     "CRM",
     "Payroll",
     "Job boards",
     "Erp",
   ];
   const legendData: { [key: string]: any } = {
     legendDisplay: true,
     legendPosition: "",
   };
 

  return (
    <Card className="dashboard-donut-chart-card" loading={false}>
      
      <div className="info-text-box">
         <div>
        <Title level={4}>Total Count of</Title>
        <Title level={3} style={{ marginTop: 0 }} className="info-main-text">
          {props.info.title}
        </Title>
        <Title level={1}>{props.info.count}</Title>
        </div>
        <HalfDonutChart series={seriesValues} label={labelValues} legend={legendData}/>
      </div>
      <div className="link-box">
      <Link className="link-text" to={props.info.route}>
          Click to see details <Icon path={mdiArrowRight} size={0.5} />
        </Link>
      </div>
    </Card>
  );
};


export default DounutChartCardDashboard;