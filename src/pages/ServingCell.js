import React, { useState, useEffect } from "react";
import styles from "./ServingCell.module.css";
import PageContent from "../components/UI/PageContent";
import Technology from "../components/ServingCell/Technology";
import ServingCellTable from "../components/ServingCell/ServingCellTable";
import Arfcn from "../components/ServingCell/Arfcn";
import { useAxios } from "../hooks/useAxios";
const ServingCell = ({ hideCurrentNode }) => {
  const httpRequest = useAxios();
  const [data, setData] = useState({
    data: undefined,
    loading: true,
    technology: null,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await httpRequest({
          url: "/pioneer/serving-cell-chart",
          method: "GET",
        });

        const techs = response?.data?.data;

        const sum = techs?.reduce(
          (previouslength, currentlength) =>
            previouslength + currentlength?.dl_arfcns?.length,
          0
        );

        setData((prevState) => {
          return {
            ...prevState,
            loading: false,
            data: techs.map((tech, index) => {
              return {
                ...techs[index],
                percentage: tech?.dl_arfcns?.length / sum,
              };
            }),
          };
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchData();
  }, []);
  const technologyClickHandler = (technologyData) =>
    setData((prevState) => {
      return {
        ...prevState,
        technology: technologyData[0],
      };
    });

  return (
    <PageContent hideCurrentNode={hideCurrentNode} className={styles.container}>
      {!data.loading && (
        <React.Fragment>
          <Technology
            calculatedData={data?.data}
            className={styles.technology}
            onClick={technologyClickHandler}
          />
          <Arfcn
            className={styles.arfcn}
            data={data.data.filter((item) => item.tech == data.technology)}
          />
          <ServingCellTable className={styles.table} />
        </React.Fragment>
      )}
    </PageContent>
  );
};

export default ServingCell;
