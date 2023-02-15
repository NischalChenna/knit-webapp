import { mdiAlertCircle, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { notification, Row, Space } from "antd";
import confirm from "antd/es/modal/confirm";
import { ColumnsType } from "rc-table/lib/interface";
import React from "react";
import { useEffect, useState } from "react";
import { CustomFilters, HalfDonutChart } from "../../components";
import DataTable from "../../components/DataTable";
import ScreenTitle from "../../components/ScreenTitle";
import {
  CustomFilterObject,
  CustomFilterOption,
  OrgTableDataType,
} from "../../interfaces";
import getAxiosInstance from "../../services/Api";
import { covertTimeperiodToEpoch, timeStampToDate } from "../../utils/filters";
import "../Organizations/Organizations.scss";

export default function Organizations() {
  const [loading, setLoading] = useState<boolean>(false);
  const [seriesValues, setSeriesValues] = useState<number[]>([]);
  const [labelValues, setLabelValues] = useState<string[]>([]);
  const [data, setData] = useState<OrgTableDataType[]>([]);
  const [orgNumber, setOrgNumber] = useState<number>(0);

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
  const renderDeleteButton = (_: any, record: OrgTableDataType) => {
    return (
      <Space size="middle" onClick={() => showDeleteConfirm}>
        <div className="deleteColumn">
          <Icon path={mdiTrashCanOutline} size={"3ex"} className="deleteIcon" />
          Delete
        </div>
      </Space>
    );
  };
  const formatHeader = (title: string) => {
    return <div className="title">{title}</div>;
  };
  const formatCreatedAt = (createdAt: string) => {
    const epoch = new Date((createdAt as unknown as number) * 1000).toString();
    return <div>{timeStampToDate(createdAt)}</div>;
  };
  const tableColumns: ColumnsType<OrgTableDataType> = [
    {
      title: formatHeader("Organization"),
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "App",
      dataIndex: "appId",
      key: "appId",
    },
    {
      title: "Integration Status",
      dataIndex: "integrationState",
      key: "integrationState",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: formatCreatedAt,
    },
    {
      title: "Done By",
      dataIndex: "doneBy",
      key: "doneBy",
    },
    {
      title: "Action",
      key: "action",
      render: renderDeleteButton,
    },
  ];
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
          console.log(
            "data ",
            organizationDetails.map((org: any, index: String) => {
              org["key"] = index;
              return org;
            })
          );
          setLabelValues(Object.keys(categoryDetails));
          setSeriesValues(Object.values(categoryDetails));
          setOrgNumber(orgCount);
          setData(organizationDetails);
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
  function onFiltersChange(filter: any) {
    filter["TIME_PERIOD"] = covertTimeperiodToEpoch(
      filter["TIME_PERIOD"]
    ).toString();
    getOrganizations(JSON.stringify(filter));
  }
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <Icon path={mdiAlertCircle} size={1} />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <React.Fragment>
      <ScreenTitle />
      <div className="organizations page-card">
        <Row align={"middle"} className="orgHeadRow">
          <div>
            <div className="orgText">Total Organizations Being Served</div>
            <div className="numOrg pt-2 pb-3">{orgNumber}</div>
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
            series={seriesValues}
            label={labelValues}
            legend={legendData}
            dataLoaded={!loading}
          />
        </Row>
        <DataTable
          columns={tableColumns}
          data={data}
          dataLoaded={!loading}
          pagination={true}
        />
      </div>
    </React.Fragment>
  );
}
