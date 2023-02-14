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
        .get("app.filtersMetadata", {
          params: { filters: JSON.stringify([...dynamicFilters]) },
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("knit_jwt"),
          },
        })
        .then((res) => {
          dynamicFilters.forEach((filterK: string) => {
            initialFiltersObj[filterK] = {
              options: res.data.msg[filterK].options,
              selectedValue: res.data.msg[filterK].options[0].value,
            };
          });
          setFiltersObj(initialFiltersObj);
          props.onFiltersChange(generateFilterApiObject(initialFiltersObj));

          setFilterDataLoaded(true);
        });
    } else {
      setFiltersObj(initialFiltersObj);
      props.onFiltersChange(generateFilterApiObject(initialFiltersObj));

      setFilterDataLoaded(true);
    }
  };

  const generateFilterApiObject = (
    customFilterObj: CustomFilterObject
  ): Record<string, any> => {
    const newObj: Record<string, any> = {};
    Object.keys(customFilterObj).forEach((filterStr: string) => {
      newObj[filterStr] = customFilterObj[filterStr].selectedValue;
    });

    return newObj;
  };
  return (
    <div className="dropdown-box d-flex justify-flex-end ">
      {filterDataLoaded ? (
        <Fragment>
          {Object.keys(filtersObj).length > 0 &&
            Object.keys(filtersObj).map((filterKey: string, index: number) => {
              return (
                <Select
                  style={{ width: "10rem", marginRight: "0.3rem" }}
                  size={"large"}
                  key={filterKey}
                  onChange={(value) => {
                    const newFilterObj: CustomFilterObject = {
                      ...filtersObj,
                      [filterKey]: {
                        ...filtersObj[filterKey],
                        selectedValue: value,
                      },
                    };
                    props.onFiltersChange(
                      generateFilterApiObject(newFilterObj)
                    );
                    setFiltersObj(newFilterObj);
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
          <Skeleton.Input size={"large"} className="me-3" active />
          <Skeleton.Input size={"large"} active />
        </Fragment>
      )}
    </div>
  );
};

export default CustomFilters;
