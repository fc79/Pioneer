import React, { useEffect, useState } from "react";
import styles from "./Arfcn.module.css";
import { Pie, G2 } from "@ant-design/plots";
import ArfcnTable from "./ArfcnTable";
import ArfcnButtonGroup from "./ArfcnButtonGroup";
const Arfcn = (props) => {
  console.log("l", props);
  const { registerTheme } = G2;
  registerTheme("custom-theme", {
    colors20: [
      "#025DF4",
      "#DB6BCF",
      "#2498D1",
      "#BBBDE6",
      "#4045B2",
      "#21A97A",
      "#FF745A",
      "#007E99",
      "#FFA8A8",
      "#2391FF",
      "#FFC328",
      "#A0DC2C",
      "#946DFF",
      "#626681",
      "#EB4185",
      "#CD8150",
      "#36BCCB",
      "#327039",
      "#803488",
      "#83BC99",
    ],
  });

  const dataFetched = props?.data[0]?.dl_arfcns?.map((item, i) => {
    return {
      type: i,
      value: item.count,
    };
  });
  const data = [
    {
      type: 0,
      value: 0,
    },
  ];

  let colorsList = [];
  const generateColor = () => {
    const color = Math.random().toString(16).substr(-6);
    colorsList.push(`#${color}`);
    return `#${color}`;
  };
  const colors = props.data[0]?.dl_arfcns?.map((data, index) => {
    return {
      ...data,
      color: generateColor(),
    };
  });
  const NoFetchedDataConfig = {
    legend: false,
    autoFit: true,
    appendPadding: 0,
    tooltip: false,
    data: data,
    angleField: "value",
    colorField: "type",
    // theme: "custom-theme",

    radius: 1,
    innerRadius: 0.6,

    label: false,
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 16,
        },
        content: "ARFCN\nChart",
      },
    },
  };
  const config = {
    legend: false,
    autoFit: true,
    appendPadding: 0,
    // tooltip: false,
    data: props?.data[0]?.dl_arfcns ? dataFetched : data,
    angleField: "value",
    colorField: "type",
    // theme: "custom-theme",
    color: colorsList,

    radius: 1,
    innerRadius: 0.6,

    label: false,
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 16,
        },
        content: "ARFCN\nChart",
      },
    },
  };

  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles.title}>ARFCN Lifetime</div>
      <div className={styles.chart}>
        {props?.data[0] ? (
          <Pie
            {...config}
            style={{
              height: "100%",
              width: "100%",
            }}
            className={styles.pie}
          />
        ) : (
          <Pie
            {...NoFetchedDataConfig}
            style={{
              height: "100%",
              width: "100%",
            }}
            className={styles.pie}
          />
        )}
      </div>
      <div className={styles.buttons}></div>
      <div className={styles.table}>
        <ArfcnTable selecetedTechData={colors} />
      </div>
    </div>
  );
};

export default Arfcn;
