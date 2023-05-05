import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Spin } from "antd";
import "antd/dist/antd.css";
import { ArfcnTableColumns } from "./ArfcnTableColumn";
const ArfcnTable = (props) => {
  const { selecetedTechData } = props;
  return (
    <div>
      {
        <Table
          style={{
            // width: "55%",
            // left: "716px",
            marginTop: "12%",
          }}
          columns={ArfcnTableColumns}
          dataSource={selecetedTechData}
          // loading={{
          //   indicator: (
          //     <Spin
          //       tip="Loading..."
          //       size="large"
          //       style={{
          //         display: "flex",
          //         flexFlow: "column nowrap",
          //         gap: "10%",
          //       }}
          //     />
          //   ),
          // }}
          pagination={{
            style: {
              display: "none",
            },
          }}
          bordered
        />
      }

      {/* {loading && <LoadingSpinner height={'100%'}/>} */}
    </div>
  );
};
export default ArfcnTable;
