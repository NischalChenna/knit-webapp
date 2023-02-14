import { Row } from "antd";
import React, { useState, useEffect } from "react";
import { CustomFilters } from "../components";
import ScreenTitle from "../components/ScreenTitle";
import { CustomFilterObject } from "../interfaces";

const Syncs = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [syncsData, setSyncsData] = useState(null);

  const filtersChange = (filterObj: Record<string, any>) => {
    console.log("call sync  APi with", filterObj);
  };
  return (
    <React.Fragment>
      <ScreenTitle />
      <Row className="syncs-header" justify={"space-between"}>
        <div className="left-section">
          <span> Total Active syncs</span>
          <h6></h6>
        </div>{" "}
        <CustomFilters
          filterKeys={["ORGANIZATIONS", "INTEGRATIONS"]}
          onFiltersChange={filtersChange}
        />
      </Row>
    </React.Fragment>
  );
};

export default Syncs;
