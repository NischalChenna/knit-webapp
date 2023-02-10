import { Layout, Select } from "antd";
import React, { useState } from "react";
import HalfDonutChart from "../HalfDonutChart";
import "../DonutChartFilterCard/DonutChartFilterCard.scss";

interface FilterCardProps {
  values: Array<{
    filterType: string;
    selectedValue: string;
    options: Array<any>;
  }>;
}

const DonutChartFilterCard = (props: FilterCardProps): JSX.Element => {
  const ReqFilterArray = props.values.filter(
    (e) => e["filterType"] === "status" || e["filterType"] === "org" || e["filterType"] === "time"|| e["filterType"] === "integration"

  );

  console.log(ReqFilterArray);

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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Layout className="org-donut-filter-card">
      <header className="header">
        <div className="org-num-box">
          <p>Total Organizations being served</p>
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
        <HalfDonutChart
          series={seriesValues}
          label={labelValues}
          legend={legendData}
        />
      </div>
    </Layout>
  );
};

export default DonutChartFilterCard;
