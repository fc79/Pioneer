import React from 'react';
import styles from './CurrentNodeInfo.module.css';
import 'antd/dist/antd.css';
import CurrentNodeMap from './CurrentNodeMap';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import LoadingSpinner from '../UI/LoadingSpinner';
import { default as Line } from '../../Icons/MenuIcons/Line.svg';
const CurrentNodeInfo = (props) => {
  const state = useSelector((state) => state.homePageCurrentNode);
  const node_info = state?.data?.data?.data;
  // const node_info = {
  //   node_id: 1311,
  //   freq_info: {
  //     band: 'Band 7 (IMT-E 2600)',
  //     ul: {
  //       ul_freq: 2535.2,
  //       ul_arfcn: 21102,
  //     },
  //     dl: {
  //       dl_freq: 2655.2,
  //       dl_arfcn: 3102,
  //     },
  //     code: {
  //       name: 'pci',
  //       value: 354,
  //     },
  //   },
  //   location_info: {
  //     mcc: '432',
  //     mnc: '11',
  //     cell_id: 23055624,
  //     area_code: {
  //       name: 'tac',
  //       value: 44200,
  //       rac: null,
  //     },
  //   },
  //   received_power: {
  //     sig_power: {
  //       name: 'RSRP',
  //       value: -108,
  //       color: '#ff0000',
  //     },
  //     sig_quality: {
  //       name: 'RSRQ',
  //       value: -13,
  //       color: '#ffff00',
  //     },
  //   },
  //   technology: 4,
  //   imsi: 432113943697750,
  //   imei: 862770042079520,
  //   name: null,
  //   phone_type: 'Mi 9T',
  //   status: 'Disconnected',
  //   app_version: '2.13 2021-09-01 00-31-24',
  //   latitude: '35.732683',
  //   longitude: '51.344917',
  // };
  return (
    <React.Fragment>
      {state.loading ? (
        <div className={props.className}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={`${props.className} ${styles.container}`}>
          <div className={`${styles.row} ${styles.status}`}>
            <span>Status</span>
            <span>{node_info?.status}</span>
          </div>
          <div className={`${styles.row} ${styles.name}`}>
            <span>Name</span>
            <span>{node_info?.name ? node_info?.name : ''}</span>
          </div>
          <div className={`${styles.row} ${styles.imsi}`}>
            <span>IMSI</span>
            <span>{node_info?.imsi}</span>
          </div>
          <div className={`${styles.row} ${styles.imei}`}>
            <span>IMEI</span>
            <span>{node_info?.imei}</span>
          </div>
          <div className={`${styles.row} ${styles.type}`}>
            <span>Type</span>
            <span>{node_info?.phone_type}</span>
          </div>
          <div className={`${styles.row} ${styles.ver}`}>
            <span>Ver</span>
            <span>{node_info?.app_version}</span>
          </div>
          <div className={`${styles.row} ${styles.loc}`}>
            <span>Loc</span>
            <span>
              {`${node_info?.latitude ? node_info?.latitude : ''} ${
                node_info?.latitude && node_info?.longitude ? ',' : ''
              } ${node_info?.longitude ? node_info?.longitude : ''}`}
            </span>
          </div>
          <div className={`${styles.row} ${styles.map}`}>
            {console.log(node_info)}

            <CurrentNodeMap
              nodes={[
                {
                  lat: node_info?.latitude,
                  lng: node_info?.longitude,
                },
              ]}
            />
          </div>
          <div className={`${styles.row} ${styles['first-line']}`}>
            <img src={Line} alt="" />
          </div>
          <div className={`${styles.row} ${styles.band}`}>
            <span>Band</span>
            <span>{node_info?.freq_info?.band}</span>
          </div>
          <div className={`${styles.row} ${styles.ulfr}`}>
            <span>UL FR</span>
            <span>{node_info?.freq_info?.ul.ul_freq}</span>
          </div>
          <div className={`${styles.row} ${styles.dlfr}`}>
            <span>DL FR</span>
            <span>{node_info?.freq_info?.dl.dl_freq}</span>
          </div>
          <div className={`${styles.row} ${styles.pci}`}>
            <span>
              {node_info?.freq_info?.code?.name
                ? node_info?.freq_info?.code?.name?.toUpperCase()
                : 'Code'}
            </span>
            <span>{node_info?.freq_info?.code?.value}</span>
          </div>
          <div className={`${styles.row} ${styles['second-line']}`}>
            <img src={Line} alt="" />
          </div>
          <div className={`${styles.row} ${styles.mcc}`}>
            <span>MCC</span>
            <span>{node_info?.location_info?.mcc}</span>
          </div>
          <div className={`${styles.row} ${styles.mnc}`}>
            <span>MNC</span>
            <span>{node_info?.location_info?.mnc}</span>
          </div>
          <div className={`${styles.row} ${styles.tac}`}>
            <span>
              {node_info?.location_info?.area_code?.name
                ? node_info?.location_info?.area_code?.name?.toUpperCase()
                : 'TAC/LAC'}
            </span>
            <span>{node_info?.location_info?.area_code?.value}</span>
          </div>
          <div className={`${styles.row} ${styles.cellid}`}>
            <span>Cell ID</span>
            <span>{node_info?.location_info?.cell_id}</span>
          </div>
          <div className={`${styles.row} ${styles['third-line']}`}>
            <img src={Line} alt="" />
          </div>
          <div className={`${styles['pq-row']} ${styles.power}`}>
            {node_info?.received_power?.sig_power?.name && (
              <React.Fragment>
                <span className={styles['pq-title']}>
                  {node_info?.received_power?.sig_power?.name}
                </span>
                <span className={styles['pq-value']}>
                  {node_info?.received_power?.sig_power?.name?.toUpperCase() ===
                  'RSRP' ? (
                    <ProgressBar
                      bgcolor={node_info?.received_power?.sig_power?.color}
                      progress={
                        node_info?.received_power?.sig_power?.value >= -80
                          ? 100
                          : node_info?.received_power?.sig_power?.value >= -90
                          ? 50
                          : node_info?.received_power?.sig_power?.value < -90
                          ? 25
                          : node_info?.received_power?.sig_power?.value <= -100
                          ? 0
                          : ''
                      }
                      amount={`${node_info?.received_power?.sig_power?.value}dBm`}
                    />
                  ) : (
                    '3G'
                  )}
                </span>
              </React.Fragment>
            )}
          </div>
          <div className={`${styles['pq-row']} ${styles.quality}`}>
            {node_info?.received_power?.sig_quality?.name && (
              <React.Fragment>
                <span className={styles['pq-title']}>
                  {node_info?.received_power?.sig_quality?.name}
                </span>
                <span className={styles['pq-value']}>
                  {node_info?.received_power?.sig_quality?.name?.toUpperCase() ===
                  'RSRQ' ? (
                    <ProgressBar
                      bgcolor={node_info?.received_power?.sig_quality?.color}
                      progress={
                        node_info?.received_power?.sig_quality?.value >= -10
                          ? 100
                          : node_info?.received_power?.sig_quality?.value >= -15
                          ? 50
                          : node_info?.received_power?.sig_quality?.value < -15
                          ? 25
                          : node_info?.received_power?.sig_quality?.value <= -20
                          ? 0
                          : ''
                      }
                      amount={`${node_info?.received_power?.sig_quality?.value}db`}
                    />
                  ) : (
                    '3G'
                  )}
                </span>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CurrentNodeInfo;
