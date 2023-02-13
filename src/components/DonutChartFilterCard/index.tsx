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
  filterUpdateFunction: (arg: Record<string, any>) => any;
}

const DonutChartFilterCard = (props: FilterCardProps): JSX.Element => {
  const [selectedValues, setSelectedValues] = React.useState({});
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
    <Layout className="org-donut-filter-card">
      <header className="header">
        <div className="org-num-box">
          <p>Total Organizations being served</p>
          <p>12</p>
        </div>
        <div className="dropdown-box">
          <React.Fragment>
            {props.values.length > 0 &&
              props.values.map(
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
                      onChange={(value) =>
                        props.filterUpdateFunction({ [e.filterType]: value })
                      }
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
          dataLoaded={true}
        />
      </div>
    </Layout>
  );
};

export default DonutChartFilterCard;
