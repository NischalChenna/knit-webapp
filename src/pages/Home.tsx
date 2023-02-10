import {
  DonutChartFilterCard,
  HalfDonutChart,
  SplineAreaChart,
  SplineChartFilterCard,
} from "../components";
// import SignUp from "./SignUp";

function Home() {
  const filterData: Array<{
    filterType: string;
    selectedValue: string;
    options: Array<any>;
  }> = [
    {
      filterType: "status",
      selectedValue: "Inactive",
      options: [
        { value: 100, label: "All Status" },
        { value: 50, label: "Active" },
        { value: 30, label: "Inactive" },
        { value: 20, label: "Resigned" },
      ],
    },

    {
      filterType: "org",
      selectedValue: "",
      options: [
        { value: 100, label: "All Org" },
        { value: 10, label: "Google" },
        { value: 20, label: "OLX" },
        { value: 30, label: "Microsoft" },
        { value: 40, label: "Facebook" },
        { value: 50, label: "Twitter" },
        { value: 60, label: "LinkedIn" },
        { value: 70, label: "Instagram" },
      ],
    },
    {
      filterType: "integration",
      selectedValue: "",
      options: [
        { value: 12, label: "HRIS" },
        { value: 20, label: "Communication" },
        { value: 30, label: "Accounting" },
        { value: 35, label: "CRM" },
        { value: 45, label: "Payroll" },
        { value: 10, label: "JobBoards" },
        // { value: 50, label: "ERP" },
      ],
    },
    {
      filterType: "time",
      selectedValue: "",
      options: [
        { value: 10, label: "JAN" },
        { value: 202, label: "FEB" },
        { value: 300, label: "MAR" },
        { value: 50, label: "APR" },
        { value: 43, label: "MAY" },
        { value: 100, label: "JUN" },
        { value: 45, label: "JUL" },
      ],
    },
  ];

  // const seriesValues: number[] = [100, 55, 41, 17, 19, 23, 45];
  // const labelValues: string[] = [
  //   "HRMS",
  //   "Communication",
  //   "Accounting",
  //   "CRM",
  //   "Payroll",
  //   "Job boards",
  //   "Erp",
  // ];
  // const legendData: { [key: string]: any } = {
  //   legendDisplay: true,
  //   legendPosition: "",
  // };

  // const seriesdata: number[] = [0, 8, 12, 16];
  // const categories: string[] = [
  //   "2018-09-19T00:00:00.000Z",
  //   "2018-08-19T01:30:00.000Z",
  //   "2018-07-19T02:30:00.000Z",
  //   "2018-06-19T03:30:00.000Z",
  //   "2018-05-19T04:30:00.000Z",
  //   "2018-04-19T05:30:00.000Z",
  //   "2018-03-19T06:30:00.000Z",
  // ];

  return (
    <div>
      <h1>Home</h1>
      {/* <div style={{ width: "45%", height: "20%" }}> */}
      {/* <DonutChartFilterCard values={filterData} /> */}
      <SplineChartFilterCard values={filterData} />
      {/* <SplineAreaChart seriesValues={seriesdata} categoriesValues={categories} /> */}
      {/* </div> */}
      {/* <HalfDonutChart series={seriesValues} label={labelValues} legend={legendData}  /> */}
      //{" "}
    </div>
  );
}

export default Home;
