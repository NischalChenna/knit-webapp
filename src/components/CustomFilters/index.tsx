import { useState, Fragment, useEffect } from "react";
import { CustomFilterObject } from "../../interfaces";
import { Select } from "antd";
interface CustomFilterProps {
  filterValues: CustomFilterObject;
  onFiltersChange: Function;
}
const CustomFilters = (props: CustomFilterProps): JSX.Element => {
  const [filtersObj, setFiltersObj] = useState<CustomFilterObject>(
    Object.keys(props.filterValues).length > 0 ? props.filterValues : {}
  );
  useEffect(() => {
    setFiltersObj(props.filterValues);
  }, []);
  return (
    <div className="dropdown-box d-flex justify-flex-end">
      <Fragment>
        {Object.keys(filtersObj).length > 0 &&
          Object.keys(filtersObj).map((filterKey: string, index: number) => {
            return (
              <Select
                style={{ width: 100, marginRight: "0.3rem" }}
                key={filterKey}
                onChange={(value) =>
                  props.onFiltersChange({
                    ...filtersObj,
                    filterKey: {
                      ...filtersObj[filterKey],
                      selectedValue: value,
                    },
                  })
                }
                defaultValue={
                  filtersObj[filterKey].selectedValue
                    ? filtersObj[filterKey].selectedValue
                    : filtersObj[filterKey].options[0].value
                }
                options={filtersObj[filterKey].options}
              />
            );
          })}
      </Fragment>
    </div>
  );
};

export default CustomFilters;
