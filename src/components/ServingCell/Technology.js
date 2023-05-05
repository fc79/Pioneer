import React, { useState } from "react";
import styles from "./Technology.module.css";
import { Pie } from "@ant-design/plots";
import { useAxios } from "../../hooks/useAxios";
const Technology = (props) => {
  const { calculatedData, onClick } = props;

  const data = calculatedData.map((item) => {
    return {
      type: `${item.tech}G, ${Math.round(item.percentage * 100)}%`,
      value: Math.round(item.percentage * 100),
    };
  });

  const config = {
    onReady: (plot) => {
      plot.on("element:click", (...args) => onClick(args[0].data.data.type));
    },

    tooltip: false,
    autoFit: true,
    appendPadding: 0,
    data: data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{percentage}",
      style: {
        textAlign: "center",
        fontSize: 12,
        color: "black",
      },
    },

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
        content: "Technology\nChart",
      },
    },
  };

  return (
    <div className={`${props.className} ${styles.container}`}>
      <span className={styles.title}>Technology Lifetime</span>
      <div className={styles.chart}>
        <Pie
          {...config}
          style={{
            height: "100%",
            width: "100%",
          }}
          className={styles.pie}
        />
      </div>
      <div className={styles.legend}></div>
    </div>
  );
};

export default Technology;
