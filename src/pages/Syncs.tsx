import React, { useState, useEffect } from "react";
import { CustomFilters } from "../components";
import ScreenTitle from "../components/ScreenTitle";
import { CustomFilterObject } from "../interfaces";

const Syncs = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [syncsData, setSyncsData] = useState(null);

  const filtersChange = (filterObj: CustomFilterObject) => {
    // api call consuming the filterObj
  };
  return (
    <React.Fragment>
      <ScreenTitle />
      <div className="syncs-header d-flex justify-space-between">
        <div className="left-section">
          <span> Total Active syncs</span>
          <h6></h6>
        </div>{" "}
        <CustomFilters
          filterKeys={["ORGANIZATIONS", "INTEGRATIONS"]}
          onFiltersChange={filtersChange}
        />
      </div>
    </React.Fragment>
  );
};

export default Syncs;
