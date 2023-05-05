import React, { useState, useEffect } from 'react';
import NodeTabView from '../components/HomePage/NodeTabView';
import Map from '../components/HomePage/Map';
import CustomDropDown from '../components/HomePage/CustomDropDown';
import styles from './Home.module.css';
import { default as Refresh } from '../Icons/HomePageIcons/Refresh.svg';
import { default as Search } from '../Icons/HomePageIcons/Search.svg';
import { default as Pin } from '../Icons/HomePageIcons/Pin.svg';
import { default as HideMap } from '../Icons/HomePageIcons/HideMap.svg';
import { default as ShowMap } from '../Icons/HomePageIcons/ShowMap.svg';
import { default as ShowTable } from '../Icons/HomePageIcons/ShowTable.svg';
import { default as HideTable } from '../Icons/HomePageIcons/HideTable.svg';

const Home = (props) => {
  const [mapVisibility, setMapVisibility] = useState(true);
  const [tableVisibility, setTableVisibility] = useState(true);
  const [mapFullScreen, setMapFullScreen] = useState(false);
  const [tableFullScreen, settableFullScreen] = useState(false);
  const mapVisibilityClickHandler = (event) => {
    setMapVisibility(!mapVisibility);
    setMapFullScreen(mapVisibility && !tableVisibility);
    settableFullScreen(mapVisibility);
  };
  const tableVisibilityClickHandler = (event) => {
    setTableVisibility(!tableVisibility);
    setMapFullScreen(mapVisibility && !tableVisibility);
    settableFullScreen(mapVisibility);
  };
  return (
    <React.Fragment>
      <div
        className={`${props.dashBoardButtons} ${styles['buttons-container']}`}
      >
        <div
          className={`${styles['table-buttons']} ${styles['buttons-container']}`}
        >
          <div>
            <input placeholder="Search" />
            <button>
              <img src={Search} alt="" />
            </button>
          </div>
          <button className={styles.button}>
            <img src={Refresh} alt="" />
          </button>
          <button className={styles.button}>
            <img src={Pin} alt="" />
          </button>
          <button
            className={styles['table-visibility']}
            onClick={tableVisibilityClickHandler}
          >
            {tableVisibility ? (
              <React.Fragment>
                <img src={HideTable} alt="" />
                <span>Hide Table</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={ShowTable} alt="" />
                <span>Show Table</span>
              </React.Fragment>
            )}
          </button>
        </div>
        <div
          className={`${styles['map-buttons']} ${styles['buttons-container']}`}
        >
          <span></span>
          <CustomDropDown className={styles['map-field ']} />
          <button
            className={styles['map-visibility']}
            onClick={mapVisibilityClickHandler}
          >
            {mapVisibility ? (
              <React.Fragment>
                <img src={HideMap} alt="" />
                <span>Hide Map</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={ShowMap} alt="" />
                <span>Show Map</span>
              </React.Fragment>
            )}
          </button>
        </div>
      </div>
      <div className={`${props.className} ${styles.container}`}>
        <NodeTabView
          className={`${styles.animation} ${styles.table} ${
            tableVisibility
              ? mapVisibility
                ? mapFullScreen
                  ? styles['table-hided-to-normal']
                  : styles['table-full-screen-to-normal']
                : mapFullScreen
                ? styles['']
                : tableFullScreen
                ? styles['table-normal-to-full-screen']
                : styles['table-hided-to-full-screen']
              : mapVisibility
              ? mapFullScreen
                ? styles['']
                : tableFullScreen
                ? styles['table-normal-to-hided']
                : styles['table-hided']
              : mapFullScreen
              ? styles['table-hided']
              : styles['table-full-screen-to-hided']
          }`}
        />
        <Map
          className={`${styles.animation} ${styles.map} ${
            tableVisibility
              ? mapVisibility
                ? mapFullScreen
                  ? styles['map-full-screen-to-normal']
                  : styles['map-hided-to-normal']
                : mapFullScreen
                ? styles['']
                : tableFullScreen
                ? styles['map-normal-to-hided']
                : styles['map-hided']
              : mapVisibility
              ? mapFullScreen
                ? styles['']
                : tableFullScreen
                ? styles['map-normal-to-full-screen']
                : styles['map-hided-to-full-screen']
              : mapFullScreen
              ? styles['map-full-screen-to-hided']
              : styles['map-hided']
          }`}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
