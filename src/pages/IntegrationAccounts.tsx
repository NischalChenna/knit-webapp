import { notification, Row } from "antd";
import React from "react";
import { useState } from "react";
import { ScreenTitle, CustomFilters, HalfDonutChart } from "../components";
import OrgDataTable from "../components/OrgDataTable";
import { IntegrationData } from "../interfaces";
import getAxiosInstance from "../services/Api";
import { covertTimeperiodToEpoch } from "../utils/filters";

const IntegrationAccounts = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [integrationData, setIntegrationData] = useState<IntegrationData>({
    categoryDetails: {},
    integrationCount: 0,
    organizationDetails: [],
    seriesValues: [],
    labelValues: [],
  });

  const legendData: { [key: string]: any } = {
    legendDisplay: true,
    legendPosition: "",
    formatLegend: function (seriesName: string, otps: any) {
      return [
        seriesName,
        "  " + otps.w.config.series[otps.seriesIndex] + "   Count of accounts",
      ];
    },
  };
  function getIntegrationAccounts(filterValues: any) {
    setLoading(true);
    getAxiosInstance()
      .get("/app.getIntegrationAccounts", {
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
          const { integrationCount, organizationDetails, categoryDetails } =
            res.data.msg;
          setIntegrationData({
            categoryDetails: categoryDetails,
            integrationCount: integrationCount,
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
    getIntegrationAccounts(JSON.stringify(filter));
  };

  return (
    <React.Fragment>
      <ScreenTitle />
      <div className="organizations page-card">
        <Row align={"middle"} className="orgHeadRow">
          <div>
            <div className="orgText">Total Organizations Being Served</div>
            <div className="numOrg pt-2 pb-3">
              {integrationData.integrationCount}
            </div>
          </div>
          <div className="filters">
            <CustomFilters
              filterKeys={[
                "TIME_PERIOD",
                "STATUS",
                "INTEGRATIONS",
                "ORGANIZATIONS",
              ]}
              onFiltersChange={onFiltersChange}
            />
          </div>
        </Row>
        <Row align={"middle"} justify={"center"} className="orgRow">
          <HalfDonutChart
            series={integrationData.seriesValues}
            label={integrationData.labelValues}
            legend={legendData}
            dataLoaded={!loading}
          />
        </Row>
        <OrgDataTable
          data={integrationData.organizationDetails}
          loading={loading}
        />
      </div>
    </React.Fragment>
  );
};

export default IntegrationAccounts;
