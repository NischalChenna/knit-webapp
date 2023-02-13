import Chart from "react-apexcharts";

interface HalfDonutChartProps {
  series: number[];
  label: string[];
  legend: { [string: string]: any };
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
    dataLabels:{
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

  return <Chart options={options} series={series} type="donut" width="500" />;
};

export default HalfDonutChart;
