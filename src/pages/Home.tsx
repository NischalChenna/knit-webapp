import { HalfDoughnutChart, SplineAreaChart } from "../components";
import SignUp from "./SignUp";

function Home() {
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

  
    const seriesdata: number[] = [0, 8, 12, 16]
    const categories: string[] = [
      "2018-09-19T00:00:00.000Z",
      "2018-08-19T01:30:00.000Z",
      "2018-07-19T02:30:00.000Z",
      "2018-06-19T03:30:00.000Z",
      "2018-05-19T04:30:00.000Z",
      "2018-04-19T05:30:00.000Z",
      "2018-03-19T06:30:00.000Z",
    ]

  return (
    <div>
      <h1>Home</h1>
      <div style={{ width: "45%", height: "20%" }}>
        <SplineAreaChart seriesValues={seriesdata} categoriesValues={categories} />
      </div>

      {/* <HalfDoughnutChart series={seriesValues} label={labelValues} legend={legendData}  /> */}
    </div>
  );
}

export default Home;
