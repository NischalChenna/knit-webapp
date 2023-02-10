import { Layout, Select } from "antd";
import React, { useState } from "react";
import HalfDonutChart from "../HalfDonutChart";
import "../SplineChartFilterCard/SplineChartFilterCard.scss"
import SplineAreaChart from "../SplineAreaChart";

interface FilterCardProps {
  values: Array<{
    filterType: string;
    selectedValue: string;
    options: Array<any>;
  }>;
}

const SplineChartFilterCard = (props: FilterCardProps): JSX.Element => {
  const ReqFilterArray = props.values.filter(
    (e) =>
      e["filterType"] === "status" ||
      e["filterType"] === "org" ||
      e["filterType"] === "time" ||
      e["filterType"] === "integration"
  );

  console.log(ReqFilterArray);

  const seriesdata: number[] = [
    0, 8, 12, 16, 12, 11, 10, 8, 12, 16, 12, 23, 45, 65, 1, 23,
  ];
  const categories: string[] = [
    "2018-09-19T00:00:00.000Z",
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T03:30:00.000Z",
    "2018-09-19T04:30:00.000Z",
    "2018-09-19T05:30:00.000Z",
    "2018-09-19T06:30:00.000Z",
    "2018-09-19T07:30:00.000Z",
    "2018-09-19T08:30:00.000Z",
    "2018-09-19T09:30:00.000Z",
    "2018-09-19T10:30:00.000Z",
    "2018-09-19T11:30:00.000Z",
    "2018-09-19T12:30:00.000Z",
    "2018-09-19T13:30:00.000Z",
    "2018-09-19T14:30:00.000Z",
    "2018-09-19T15:30:00.000Z",
    "2018-09-19T16:30:00.000Z",
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Layout className="spline-chart-filter-card">
      <header className="header">
        <div className="Api-num-box">
          <p>Total Api calls</p>
          <p>12</p>
        </div>
        <div className="dropdown-box">
          <React.Fragment>
            {ReqFilterArray.length > 0 &&
              ReqFilterArray.map(
                (
                  e: {
                    filterType: string;
                    selectedValue: string;
                    options: Array<any>;
                  },
                  i: number
                ) => {
                  return (
                    <Select
                      style={{ width: 100, marginRight: "0.3rem" }}
                      key={i}
                      onChange={handleChange}
                      defaultValue={
                        e.selectedValue ? e.selectedValue : e.options[0].value
                      }
                      options={e.options}
                    />
                  );
                }
              )}
          </React.Fragment>
        </div>
      </header>
      <div className="chart-box">
        <SplineAreaChart
          seriesValues={seriesdata}
          categoriesValues={categories}
        />
      </div>
    </Layout>
  );
};

export default SplineChartFilterCard;
