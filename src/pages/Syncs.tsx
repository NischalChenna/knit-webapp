import { Row, Skeleton } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomFilters from "../components/CustomFilters";
import ScreenTitle from "../components/ScreenTitle";
import { CustomFilterObject } from "../interfaces";
import moment from "moment";
import DataTable from "../components/DataTable";
const Syncs = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [syncsData, setSyncsData] = useState({ totalSyncs: 0, list: [] });
  const tableColumns: ColumnsType<any> = [
    {
      title: "Sync Job Id",
      dataIndex: "jobId",
      key: "jobId",
      render: (text: any) => <Link to={`/syncs/${text}`}>{text}</Link>,
    },
    {
      title: "Organization",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "Integration",
      dataIndex: "appId",
      key: "appId",
    },
    {
      title: "Last Synced At",
      dataIndex: "syncedAt",
      key: "syncedAt",
      render: (text: any) => moment(text).format("DD MMM YYYYY, H A"),
    },
    {
      title: "Upcoming Sync",
      dataIndex: "upcomingSync",
      key: "upcomingSync",
      render: (text: any) => moment(text).format("DD MMM YYYYY, H A"),
    },
    {
      title: "Sync Frequency",
      dataIndex: "syncFrequency",
      key: "syncFrequency",
    },
  ];
  const filtersChange = (filterObj: Record<string, any>) => {
    console.log("call sync  APi with", filterObj);
  };
  return (
    <React.Fragment>
      <ScreenTitle />
      <div className="page-card">
        <Row className="syncs-header" justify={"space-between"}>
          <div className="left-section">
            <span> Total Active syncs</span>
            <h5 className="pt-2">
              {dataLoaded ? syncsData.totalSyncs : <Skeleton.Button active />}
            </h5>
          </div>{" "}
          <CustomFilters
            filterKeys={["ORGANIZATIONS", "INTEGRATIONS"]}
            onFiltersChange={filtersChange}
          />
        </Row>

        <DataTable
          columns={tableColumns}
          data={syncsData.list}
          dataLoaded={dataLoaded}
          pagination={true}
        />
      </div>
    </React.Fragment>
  );
};

export default Syncs;
