import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Col, notification, Row, Space } from "antd";
import { ColumnsType } from "rc-table/lib/interface";
import { useEffect, useState } from "react";
import { HalfDonutChart } from "../../components";
import DataTable from "../../components/DataTable";
import ScreenTitle from "../../components/ScreenTitle";
import SelectCategory from "../../components/SelectCategory";
import SelectTimePeriod from "../../components/SelectTimePeriod";
import getAxiosInstance from "../../services/Api";
import "../Organizations/Organizations.scss";
import { formatHeader, renderDeleteButton } from "./commons";
import { DataType } from "./interfaces/DataType";

const tableColumns: ColumnsType<DataType> = [
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

export default function Organizations() {
  const [loading, setLoading] = useState<boolean>(false);
  const [seriesValues, setSeriesValues] = useState<number[]>([]);
  const [labelValues, setLabelValues] = useState<string[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const [orgNumber, setOrgNumber] = useState<number>(0);

  useEffect(() => {
    getOrganizations();
  }, []);

  const formatHeader = (title: string) => {
    return <div className="title">{title}</div>;
  };

  // const seriesValues: number[] = [100, 55];
  // const labelValues: string[] = ["HRMS", "Communication"];

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

  const renderDeleteButton = (_: any, record: DataType) => {
    return (
      <Space size="middle" onClick={() => console.log("record ", record)}>
        <div className="deleteColumn">
          <Icon path={mdiTrashCanOutline} size={"3ex"} className="deleteIcon" />
          Delete
        </div>
      </Space>
    );
  };
  const tableColumns: ColumnsType<DataType> = [
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
  function getOrganizations() {
    setLoading(true);
    getAxiosInstance()
      .get("/app.getOrganizations", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJuaXNjaGFsQGdldGtuaXQuZGV2IiwidXNlcklkIjoidV95NjdySmdQbWxKY05idE4wR2ZiNlc4Iiwib3JnSWQiOiJvX3pFMkFNUWVCZjlxckZnOWkxSjgwVkgiLCJleHBpcmVzQXQiOjE2NzcxNDU3MTl9.wzgaiK9dvIntyKA4kFx1iRf_suKhAYo-GX_AViJ4CwE",
        },
      })
      .then((res) => {
        if (res.data.success) {
          const { orgCount, organizationDetails, categoryDetails } =
            res.data.msg;
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
  return (
    <div>
      <ScreenTitle />
      <div className="organizations">
        <Row align={"middle"} className="orgHeadRow">
          <div>
            <div className="orgText">Total Organizations Being Served</div>
            <div className="numOrg pt-2 pb-3">{orgNumber}</div>
          </div>
          <div className="filters">
            <SelectTimePeriod className="timeperiod" />
            <SelectCategory />
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
    </div>
  );
}
