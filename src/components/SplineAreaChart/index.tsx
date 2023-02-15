interface SplineAreaChartProps {
  seriesValues: Array<number>;
  categoriesValues: Array<string>;
}

const SplineAreaChart = (props: SplineAreaChartProps): JSX.Element => {
  const series = [
    {
      name: "series1",
      data: props.seriesValues,
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: props.categoriesValues,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return <></>;
};

export default SplineAreaChart;
