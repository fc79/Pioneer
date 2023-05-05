import React, { useState, useEffect } from "react";
import styles from "./ServingCellTable.module.css";
import { Table } from "antd";
import { ServingCellTableColumns } from "./ServingCellTableColumn";
import { useAxios } from "../../hooks/useAxios";
import data from "./DUMMY.json";
const ServingCellTable = (props) => {
  const httpRequest = useAxios();
  const [tablePagination, setTablePagination] = useState({
    page: 1,
    pageSize: 50,
  });
  const [data, setData] = useState({
    data: undefined,
    loading: true,
  });
  const pageChangeHandler = (pagination) => {
    setTablePagination((prevState) => {
      return {
        page: pagination.current,
        pageSize: pagination.pageSize,
      };
    });
    setData((prevState) => {
      return {
        data: prevState.data,
        loading: true,
      };
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await httpRequest({
        url: "/pioneer/serving-cell-tab-view",
        method: "GET",
        params: {
          page: tablePagination.page,
          page_size: tablePagination.pageSize,
        },
      });
      setData(() => {
        return {
          data: response?.data?.data,
          loading: false,
        };
      });
    };
    fetchData();
  }, [tablePagination.page, tablePagination.pageSize]);

  return (
    <React.Fragment>
      <Table
        className={`${styles.container} ${props.className}`}
        columns={ServingCellTableColumns}
        onChange={pageChangeHandler}
        pagination={{
          total: data.count,
          style: {
            justifyContent: "center",
          },
          pageSizeOptions: ["20", "30", "50", "60", "70", "80", "90", "100"],
          current: tablePagination.page,
          pageSize: tablePagination.pageSize,
          showLessItems: true,
          showQuickJumper: true,
        }}
        bordered
        dataSource={data?.data?.serving_cell_info}
        scroll={{ x: "max-content", y: "43vh" }}
      />
    </React.Fragment>
  );
};

export default ServingCellTable;
