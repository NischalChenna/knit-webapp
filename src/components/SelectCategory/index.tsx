import { Select } from "antd";
import React from "react";

interface SelectCategoryProps {
  defaultValue?: string;
  className?: string;
}

function SelectCategory(props: SelectCategoryProps) {
  const categories: string[] = ["HRMS", "COMMS", "All Categories"];
  return (
    <Select
      style={{ width: "10em" }}
      className={props.className}
      placeholder="Select Category"
      defaultValue={props.defaultValue ? props.defaultValue : "All Categories"}
      options={categories.map((val) => ({ label: val, value: val }))}
    ></Select>
  );
}

export default SelectCategory;
