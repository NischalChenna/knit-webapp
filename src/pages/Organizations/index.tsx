import { notification, Row } from "antd";
import React from "react";
import { useState } from "react";
import CustomFilters from "../../components/CustomFilters";
import HalfDonutChart from "../../components/HalfDonutChart";

import OrgDataTable from "../../components/OrgDataTable";
import ScreenTitle from "../../components/ScreenTitle";
import { OrgData, OrgTableDataType } from "../../interfaces";
import getAxiosInstance from "../../services/Api";
import { covertTimeperiodToEpoch } from "../../utils/filters";
import "../Organizations/Organizations.scss";

const Organizations = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [orgData, setOrgData] = useState<OrgData>({
    categoryDetails: {},
    orgCount: 0,
    organizationDetails: [],
    seriesValues: [],
    labelValues: [],
  });

  // useEffect(() => {
  //   getOrganizations(filters);
  // }, []);

  const legendData: { [key: string]: any } = {
    legendDisplay: true,
    legendPosition: "",
    formatLegend: function (seriesName: string, otps: any) {
      return [
        seriesName,
        "  " + otps.w.config.series[otps.seriesIndex] + "   Organizations",
      ];
    },
  };
  function getOrganizations(filterValues: any) {
    setLoading(true);
    getAxiosInstance()
      .get("/app.getOrganizations", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJuaXNjaGFsQGdldGtuaXQuZGV2IiwidXNlcklkIjoidV95NjdySmdQbWxKY05idE4wR2ZiNlc4Iiwib3JnSWQiOiJvX3pFMkFNUWVCZjlxckZnOWkxSjgwVkgiLCJleHBpcmVzQXQiOjE2NzcxNDU3MTl9.wzgaiK9dvIntyKA4kFx1iRf_suKhAYo-GX_AViJ4CwE",
        },
        params: {
          filters: filterValues,
        },
      })
      .then((res) => {
        if (res.data.success) {
          const { orgCount, organizationDetails, categoryDetails } =
            res.data.msg;
          setOrgData({
            categoryDetails: categoryDetails,
            orgCount: orgCount,
            organizationDetails: organizationDetails,
            seriesValues: Object.values(categoryDetails),
            labelValues: Object.keys(categoryDetails),
          });
        }
      })
      .catch((err) => {
        notification.error({
          placement: "bottomRight",
          message:
            err?.response?.data?.error?.msg ||
            " Something went wrong, please try again",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const onFiltersChange = (filter: any) => {
    filter["TIME_PERIOD"] = covertTimeperiodToEpoch(
      filter["TIME_PERIOD"]
    ).toString();
    getOrganizations(JSON.stringify(filter));
  };

  return (
    <React.Fragment>
      <ScreenTitle />
      <div className="organizations page-card">
        <Row align={"middle"} className="orgHeadRow">
          <div>
            <div className="orgText">Total Organizations Being Served</div>
            <div className="numOrg pt-2 pb-3">{orgData.orgCount}</div>
          </div>
          <div className="filters">
            <CustomFilters
              filterKeys={["TIME_PERIOD", "CATEGORY"]}
              onFiltersChange={onFiltersChange}
            />
          </div>
        </Row>
        <Row align={"middle"} justify={"center"} className="orgRow">
          <HalfDonutChart
            series={orgData.seriesValues}
            label={orgData.labelValues}
            legend={legendData}
            dataLoaded={!loading}
          />
        </Row>
        <OrgDataTable data={orgData.organizationDetails} loading={loading} />
      </div>
    </React.Fragment>
  );
};

export default Organizations;
