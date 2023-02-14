import { useState, Fragment, useEffect } from "react";
import { CustomFilterObject } from "../../interfaces";
import { Select, Skeleton } from "antd";
import { STATIC_FILTERS } from "../../utils/constants";
import getAxiosInstance from "../../services/Api";
interface CustomFilterProps {
  filterKeys: string[];
  onFiltersChange: Function;
}
const CustomFilters = (props: CustomFilterProps): JSX.Element => {
  const [filtersObj, setFiltersObj] = useState<CustomFilterObject>({});
  const [filterDataLoaded, setFilterDataLoaded] = useState<boolean>(false);
  useEffect(() => {
    initializeFilters();
  }, []);

  const initializeFilters = () => {
    const initialFiltersObj: Record<string, any> = {};
    const dynamicFilters: string[] = [];

    props.filterKeys.forEach((filterK: string) => {
      if (!STATIC_FILTERS[filterK]) {
        dynamicFilters.push(filterK);
      } else {
        initialFiltersObj[filterK] = {
          options: STATIC_FILTERS[filterK].options,
          selectedValue: STATIC_FILTERS[filterK].options[0].value,
        };
      }
    });
    console.log("dynamicFilters", dynamicFilters);
    if (dynamicFilters.length > 0) {
      getAxiosInstance()
        .post(
          "app.filtersMetadata",
          {
            filters: [...dynamicFilters],
          },
          {
            headers: {
              Authorization: `Bearer ` + localStorage.getItem("knit_jwt"),
            },
          }
        )
        .then((res) => {});
    } else {
      setFiltersObj(initialFiltersObj);
      setFilterDataLoaded(true);
    }
  };
  return (
    <div className="dropdown-box d-flex justify-flex-end">
      {filterDataLoaded ? (
        <Fragment>
          {Object.keys(filtersObj).length > 0 &&
            Object.keys(filtersObj).map((filterKey: string, index: number) => {
              return (
                <Select
                  style={{ width: 100, marginRight: "0.3rem" }}
                  key={filterKey}
                  onChange={(value) => {
                    props.onFiltersChange({
                      ...filtersObj,
                      filterKey: {
                        ...filtersObj[filterKey],
                        selectedValue: value,
                      },
                    });
                    setFiltersObj({
                      ...filtersObj,
                      filterKey: {
                        ...filtersObj[filterKey],
                        selectedValue: value,
                      },
                    });
                  }}
                  defaultValue={
                    filtersObj[filterKey].selectedValue
                      ? filtersObj[filterKey].selectedValue
                      : filtersObj[filterKey]?.options[0]?.value
                  }
                  options={filtersObj[filterKey].options}
                />
              );
            })}
        </Fragment>
      ) : (
        <Fragment>
          <Skeleton className="me-3" active />
          <Skeleton active />
        </Fragment>
      )}
    </div>
  );
};

export default CustomFilters;
