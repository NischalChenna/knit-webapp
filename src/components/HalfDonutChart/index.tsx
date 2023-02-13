import { DotChartOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import Chart from "react-apexcharts";
import TableSkeleton from "../TableSkeleton";

interface HalfDonutChartProps {
  series: number[];
  label: string[];
  legend: { [string: string]: any };
  dataLoaded: boolean;
}

const HalfDonutChart = (props: HalfDonutChartProps): JSX.Element => {
  const series: number[] = props.series;

  const options = {
    labels: props.label,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    legend: {
      show: props.legend["legendDisplay"],
      position: props.legend["legendPosition"]
        ? props.legend["legendPosition"]
        : "right",
      formatter: props.legend["formatLegend"],
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return props.dataLoaded ? (
    <Chart options={options} series={series} type="donut" width="500" />
  ) : (
    <Skeleton.Node active={true}>
      <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
    </Skeleton.Node>
  );
};

export default HalfDonutChart;
