import { Select } from "antd";
import React from "react";

interface SelectTimePeriodProps {
  defaultValue?: string;
  className?: string;
}

function SelectTimePeriod(props: SelectTimePeriodProps) {
  const timePeriods: string[] = [
    "All Time",
    "Last 30 days",
    "Last 60 days",
    "Last 90 days",
    "Last year",
  ];
  return (
    <Select
      style={{ width: "10em" }}
      className={props.className}
      placeholder="Select Time Period"
      defaultValue={props.defaultValue ? props.defaultValue : "All Time"}
      options={timePeriods.map((val) => ({ label: val, value: val }))}
    ></Select>
  );
}

export default SelectTimePeriod;
